/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");

//Return reference object to draw in 2d
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//prevent stretching of drawn items when resizing window
canvas.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
});

const drawCircle = () => {
  //Drawing circle with .arc()
  ctx.fillStyle = "teal";
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 1;
  //Need to tell js where to start when drawing arcs/circles
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
  ctx.fill();
};
