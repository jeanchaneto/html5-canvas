/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");

//Return reference object to draw in 2d
const ctx = canvas.getContext("2d");
console.log(ctx);

//prevent stretching of drawn items when resizing window
canvas.addEventListener("resize", () => {
  canvas.width = windows.innerWidth;
  canvas.height = window.innerHeight;
});

//Drawing circle with .arc()
ctx.fillStyle = "green";
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
//Need to tell js where to start when draing arcs/circles
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();
