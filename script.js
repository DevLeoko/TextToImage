"use strict";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var input = document.getElementById("textInput");
var image = document.getElementById("image");
ctx.fillStyle = "black";
function printText(text) {
    var _a = ctx.measureText(text), width = _a.width, actualBoundingBoxLeft = _a.actualBoundingBoxLeft, actualBoundingBoxRight = _a.actualBoundingBoxRight, actualBoundingBoxAscent = _a.actualBoundingBoxAscent, actualBoundingBoxDescent = _a.actualBoundingBoxDescent;
    canvas.width = Math.max(actualBoundingBoxLeft + actualBoundingBoxRight, width);
    canvas.height = actualBoundingBoxAscent + actualBoundingBoxDescent;
    ctx.font = "70px 'Fredericka the Great', cursive";
    ctx.clearRect(0, 0, 10000, 10000);
    ctx.fillText(text, 0, actualBoundingBoxAscent);
    image.src = canvas.toDataURL();
    image.style.maxWidth = canvas.width + "px";
}
input.addEventListener("input", function (_) { return printText(input.value || "Enter your text..."); });
printText("Enter your text...");
setTimeout(function () { return printText("Enter your text..."); }, 300);
