var numSquares=6;
var colors=generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor()
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");

var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

colorDisplay.textContent=pickedColor

for(var i=0;i<colors.length;i++){
    //color initialization
    squares[i].style.backgroundColor=colors[i]
    //compare with picked color
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor==pickedColor){
            message.textContent="Correct!"
            reset.textContent="Play Again"
            changeColor(clickedColor)
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor="#232323";
            message.textContent="Try Again"
        }
    })
}

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    numSquares=3;
    colors=generateRandomColors(numSquares)
    pickedColor=pickColor()
    colorDisplay.textContent=pickedColor
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i]
        }
        else{
            squares[i].style.display="none"
        }
    }
    h1.style.backgroundColor="orange"
})
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    numSquares=6;
    colors=generateRandomColors(numSquares)
    pickedColor=pickColor()
    colorDisplay.textContent=pickedColor
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i]
        squares[i].style.display="block"
    }
    h1.style.backgroundColor="orange"
})
reset.addEventListener("click",function(){
    colors=generateRandomColors(numSquares)
    resetEverything();
    reset.textContent="New Colors"
})

function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()* colors.length)
    return colors[random];
}

function generateRandomColors(num){
    var arr=[]
    for(var i=0;i<num;i++){
        arr.push(randColor())
    }
    return arr
}

function randColor(){
    var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	console.log("Something")
	return `rgb(${r}, ${g}, ${b})`
}

function resetEverything(){
    pickedColor=pickColor()
    colorDisplay.textContent=pickedColor
    for(var i=0;i<colors.length;i++){
        squares[i].style.backgroundColor=colors[i]
    }
    h1.style.backgroundColor="orange"
    message.textContent=""
}