//1...creating canvas

//1a.  get the context
var context = document.getElementById("main").getContext("2d");

//1b. setup your brush width & color
context.lineWidth = 10;
context.strokeStyle = "#0000FF";

//setup your main canvas  variable
var mainCanvas = document.getElementById("main");

//detect if its a click, or the END of a drag
var isClick = 0;
var startDrawing = false;   //track if you should draw or not

//3. detect mouse events
mainCanvas.addEventListener("mousedown",function(event) {
//detct a  click
isClick = 0;
startDrawing = true;

  // var x = event.pageX;
  // var y = event.pageY;
  //   console.log(x + "," +y);
});

mainCanvas.addEventListener("mouseup",function(event) {

  startDrawing = false;
  ///detct the difference between a CLICK & the END OF  A drag
  if(isClick == 0 )
  {
    console.log("Person is CLicking");

    ///insert code to draw a rectangle

    //1a. get the (x,y) of mouse
    var x = event.pageX - mainCanvas.offsetLeft;
    var y = event.pageY - mainCanvas.offsetTop;


    var brushSize = context.lineWidth;
    context.fillRect(x,y,brushSize,brushSize);

  }
  else if(isClick == 1)
  {
    console.log("Person is Dragging");
    context.beginPath();
  }

});

mainCanvas.addEventListener("mousemove",function(event) {
  isClick = 1;

  if(startDrawing == true){
    //detect your mouse position(x,y)
  var x = event.pageX - mainCanvas.offsetLeft;
  var y = event.pageY - mainCanvas.offsetTop;
    //console.log(x + "," +y);

    context.lineTo(x,y);
    context.closePath();
    context.stroke();

    context.moveTo(x,y);
  }
});

mainCanvas.addEventListener("mouseleave",function(){
  startDrawing = false;
    //console.log("Leave the canvas");
});

//4.user Interface NONSENSE

//new button
document.getElementById("newDrawing").addEventListener("click", function() {
  context.clearRect(0,0,mainCanvas.width,mainCanvas.height);
});

//erase button
document.getElementById("erase").addEventListener("click", function() {
  context.strokeStyle = "#ffffff";
  context.fillStyle = "#ffffff";
});

//pink button
document.getElementById("pink").addEventListener("click", function() {
  context.strokeStyle = "#D81B60";
  context.fillStyle = "#D81B60";
});

//yellow button
document.getElementById("yellow").addEventListener("click", function() {
  context.strokeStyle = "#FFEB3B";
  context.fillStyle = "#FFEB3B";
});

///change brush Size
document.getElementById("slider").addEventListener("change", function() {
    var sliderValue = this.value;
    console.log(sliderValue);

    ////ui
    context.lineWidth = sliderValue;
    context.getElementById("brushSize").innerHTML = sliderValue;


});
