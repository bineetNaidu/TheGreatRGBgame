var numOfSquares = 6;
var colors = [];
var colorPicked;
var squares = document.querySelectorAll(".square");
var hints = document.getElementById("hints");
var statusDisplay = document.querySelector("#status");
var h1 = document.querySelector("h1");
var resetColor = document.querySelector("#resetColor");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    // mode buttom for dificulty !!
    setUpModebtn();
    // click listeners
    squareLogic();
    // reset 
    reset();
}

// for button setup
function setUpModebtn(){
    for(var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("active");
            modeBtn[1].classList.remove("active");
            this.classList.add("active");
            //figure out how many square to show??
            if(this.textContent === "Easy"){
                numOfSquares = 3;
            } else{
                numOfSquares = 6;
            }
            reset();        
            //pick new color
            //pick a new colorPicked!!
            //update to reflex changes.. 
        })
    }
}

// for square logics
function squareLogic(){
    for(i = 0; i < squares.length; i++){
        // add listener
        squares[i].addEventListener("click", function(){
               // grab a the color to match the hint
               var clickedColor = this.style.backgroundColor;
                // check is correct or not ??
                if(clickedColor === colorPicked){
                    changeColor(colorPicked);
                    statusDisplay.textContent = "CORRECT!!";
                    resetColor.textContent = "Play Again?"
                    h1.style.backgroundColor = clickedColor;
                } else {
                    this.style.backgroundColor = "#232323"
                    statusDisplay.textContent = "TRY AGAIN!!"
                }
        }) 
    }
}

// gow reset works!!
function reset(){
    colors = generateRandomColors(numOfSquares);
    colorPicked = randomPickedColor();
    hints.textContent = colorPicked;
    resetColor.textContent = "New Colors"
    statusDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
        squares[i].style.display = "none";
        }
        }
    h1.style.backgroundColor = "steelblue";
}


resetColor.addEventListener("click", function(){ 
    reset();    
})

// if correct than change all the square color to the hints color
function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

// chossing the random color for colorpicked!
function randomPickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// functions for generating ramdon colors 
function generateRandomColors(num){
    // make an array 
    var arr = [];
    // repeat num times 
    for(var i = 0; i < num; i++){
        // generate the num and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

// this is for obtaing the color
function randomColor(){
    // pick "red" from 0 - 255
    var r =  Math.floor(Math.random() * 256);
    // pick "green" from 0 - 255
    var g =  Math.floor(Math.random() * 256);
    // pick "blue" from 0 - 255
    var b =  Math.floor(Math.random() * 256);
    // return the obtain numbber for the color 
    return "rgb(" + r + ", " + g + ", " + b + ")" ;
}