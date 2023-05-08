/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");

//Return reference object to draw in 2d
const ctx = canvas.getContext("2d");
console.log(ctx);

//prevent distortion of canvas when resizing window
canvas.addEventListener("resize", () => {
  canvas.width = windows.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(10, 10, 50, 150);
});
