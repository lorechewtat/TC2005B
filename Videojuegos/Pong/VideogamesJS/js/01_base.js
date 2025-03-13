/*
 * First script to draw some figures on the Canvas
 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 *
 * Gilberto Echeverria
 * 2025-02-18
 */

"use strict";

// Global variables
const canvasWidth = 800;
const canvasHeight = 600;
const boxSize = 200;

// Context of the Canvas
let ctx;

function main() {
    // Get a reference to the object with id 'canvas' in the page
    const canvas = document.getElementById('canvas'); //determina de q tamaño es el area azul
    // Resize the element
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // Get the context for drawing in 2D
    ctx = canvas.getContext('2d');

    // Draw a square
    ctx.fillStyle = "red";
    ctx.fillRect(canvasWidth / 2, canvasHeight / 2, boxSize, boxSize); //coordenadas de mi rectangulo

    // Draw an ellipse or circle
    ctx.fillStyle = "green"; //define color 
    ctx.strokeStyle = "green";
    ctx.ellipse(400, 300, 60, 30, Math.PI/4, 0, Math.PI * 2, false);
    ctx.fill(); //hace la accion
    ctx.stroke(); //stroke y fill
}
