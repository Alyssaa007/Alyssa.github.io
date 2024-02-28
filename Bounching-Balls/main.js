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

    }

    draw() {

    }

    update() {

    }

    collision() {

    }
}

// Loop function for the balls animation.

function loop() {

}

// Populate the ball array.

const balls = [];

while(){

}

// Start the animation loop.

loop();
