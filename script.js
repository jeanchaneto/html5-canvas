/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");

//Return reference object to draw in 2d
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particulesArray = [];

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
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Particule {
  constructor() {
    // this.x = mouse.x,
    // this.y = mouse.y,
    (this.x = canvas.width * Math.random()),
      (this.y = canvas.height * Math.random()),
      (this.size = Math.random() * 5 + 1),
      (this.speedX = Math.random() * 3 - 1.5),
      (this.speedY = Math.random() * 3 - 1.5);
  }
  update() {
    (this.x += this.speedX), (this.y += this.speedY);
  }
  draw() {
    ctx.fillStyle = "teal";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    ctx.fill();
  }
}

//call and create 100 paticules
const init = () => {
  for (let i = 0; i < 100; i++) {
    particulesArray.push(new Particule());
  }
};

init();

const handleParticules = () => {
  for (let i = 0; i < particulesArray.length; i++) {
    particulesArray[i].update();
    particulesArray[i].draw();
  }
};

const animate = () => {
  //clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticules();
  //create a loop
  requestAnimationFrame(animate);
};

animate();
