/*
    Name: Jeremy Becker
    Date: 01.30.19
    Filename: script.js
*/

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);