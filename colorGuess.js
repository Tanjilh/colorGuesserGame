var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  for (i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  for (i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  goalColor = pickColor();
  //colorDisplay to match goalColor
  colorDisplay.textContent = goalColor;
  //change color of squares
  for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  //reset h1 backgroundColor and messageDisplay
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
});

colorDisplay.textContent = goalColor;

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add event to all squares
  squares[i].addEventListener("click", function(){
    //get color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to goalColor
    if(clickedColor === goalColor) {
      messageDisplay.textContent = "correct!";
      resetButton.textContent = "Play Again?";
      changeColor(goalColor);
      h1.style.backgroundColor = goalColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "try again";
    }
  });
}

function changeColor(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //pick a random number
  var random = Math.floor(Math.random() * colors.length);
  //use to access item in array
  return colors[random];
}

function generateRandomColors(num) {
  //array of 'num' colors
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++) {
    //push random colors to array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor(){
  //generate rgb(x, y, z) values 0-255 randomly
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b +")";
}
