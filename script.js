/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");

//Return reference object to draw in 2d
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particulesArray = [];
let hue = 0;

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
  for (let i = 0; i < 100; i++) {
    particulesArray.push(new Particule());
  }
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 15; i++) {
    particulesArray.push(new Particule());
  }
});

class Particule {
  constructor() {
    (this.x = mouse.x),
      (this.y = mouse.y),
      // (this.x = canvas.width * Math.random()),
      //   (this.y = canvas.height * Math.random()),
      (this.size = Math.random() * 15 + 1),
      (this.speedX = Math.random() * 3 - 1.5),
      (this.speedY = Math.random() * 3 - 1.5);
      this.color = 'hsl(' + hue + ',100%, 50%)'
  }
  update() {
    (this.x += this.speedX), (this.y += this.speedY);
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

//call and create 100 paticules
// const init = () => {
//   for (let i = 0; i < 100; i++) {
//     particulesArray.push(new Particule());
//   }
// };

// init();

const handleParticules = () => {
  for (let i = 0; i < particulesArray.length; i++) {
    particulesArray[i].update();
    particulesArray[i].draw();
    if (particulesArray[i] <= 0.3) {
      particulesArray[i].splice(i, 1);
      i--;
    }
  }
};

const animate = () => {
  //clear canvas
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticules();
  hue++;
  //create a loop
  requestAnimationFrame(animate);
};

animate();
