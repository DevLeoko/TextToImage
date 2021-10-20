const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const input = (document.getElementById("textInput")! as HTMLInputElement);
const image = (document.getElementById("image")! as HTMLImageElement);

ctx.fillStyle = "black";


function printText(text: string){
  const { width, actualBoundingBoxLeft, actualBoundingBoxRight, actualBoundingBoxAscent, actualBoundingBoxDescent } = ctx.measureText(text);
  canvas.width = Math.max(actualBoundingBoxLeft + actualBoundingBoxRight, width);
  canvas.height = actualBoundingBoxAscent + actualBoundingBoxDescent;
  ctx.font = "70px 'Fredericka the Great', cursive";
  ctx.clearRect(0, 0, 10000, 10000);
  ctx.fillText(text, 0, actualBoundingBoxAscent);

  image.src = canvas.toDataURL();
  image.style.maxWidth = `${canvas.width}px`
}

input.addEventListener("input", (_) => printText(input.value || "Enter your text..."));

printText("Enter your text...")
setTimeout(() => printText("Enter your text..."), 300);