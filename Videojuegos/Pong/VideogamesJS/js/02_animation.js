/*
 * Simple animation on the HTML canvas
 *
 * Gilberto Echeverria
 * 2025-02-19
 */

"use strict";

// Global variables
const canvasWidth = 800;
const canvasHeight = 600;

// Context of the Canvas
let ctx;


// An object to represent the box to be displayed, forma de definir objetos en javascript
const box = {
    color: "red",
    size: 200,
    x: 0,
    y: canvasHeight / 2,
    direction: 1,
    speed: 2.0,
}

function main() {
    // Get a reference to the object with id 'canvas' in the page
    const canvas = document.getElementById('canvas');
    // Resize the element
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // Get the context for drawing in 2D
    ctx = canvas.getContext('2d');

    drawScene();
}

function drawScene() {
    // Clean the canvas so we can draw everything again
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw a square
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.size, box.size);

    // Update the properties of the object

    box.x += 0.3 * box.direction;
    //box.y += 0.3;
    //box.size -= 0.1;
    if(box.x >= canvasWidth - box.size)
    {
        box.direction *= -1; // o box.direction = -1
        box.speed += 0.1;
    }
    else if(box.x < 0)
    {
        box.direction = 1;
        box.speed += 0.1;
    }

    requestAnimationFrame(drawScene); //en cuanto termine vuelve a dibujar
}
