// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Ball class for the methods "draw", "update", "collision detection".

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size; 
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctz.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        if ((this.x - this.size) <= 0) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }
        this.x += this.velX;
        this.y += this.velY;
    }

    collision() {

    }
}

// Loop function for the balls animation.

function loop() {

}

// Populate the ball array.

const balls = [];

while(balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
    // NOTES: ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing  

    random(0 + size, width - size),
    random(0 + size, width - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
    );
    
    balls.push(ball);
}

// Start the animation loop.

loop();
