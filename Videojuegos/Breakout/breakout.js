/*
Implementation of the game of Breakout

Lorena Estefanía Chewtat Torres 
2025-03-12
*/

"use strict";

// Global variables
const canvasWidth = 926;
const canvasHeight = 600;

let oldTime = 0;

let blocks = []; //array that stores the blocks
let powerUps = []; //array that stores the powerups
const rows = 7;

const paddleVelocity = 0.3;
const initialSpeed = 0.5;

let score = 0;
let lives = 3;

let playing = true;

// Context of the Canvas
let ctx;

// Classes for the Breakout game
class Ball extends GameObject //class for ball
{
    constructor(position, width, height, color, velocity)
    {
        super(position, width, height, color, "ball" ) 
        this.initVelocity();
        this.inPlay = false;
    }

    update(deltaTime)
    {
        if(!this.inPlay)
        {
            this.position = paddle.position.plus(new Vec(paddle.width / 2 - 10, -20)); //sets the position of the ball to the paddle
        }
        else
        {
            this.position = this.position.plus(this.velocity.times(deltaTime));
        }
    }

    initVelocity()
    {
        this.inPlay = true;
        let angle = Math.random() * ((5 * Math.PI) / 6 - (Math.PI / 6)) +  Math.PI / 6; //random angle between 30 and 150 degrees
        this.velocity = new Vec(Math.cos(angle), Math.sin(angle)).times(initialSpeed); 
    }

    reset()
    {
        this.inPlay = false;
        this.position = paddle.position.plus(new Vec(paddle.width / 2 - 10, -20)); //resets the position of the ball
        this.velocity = new Vec(0, 0);
    }
}

class Paddle extends GameObject //class for paddle
{
    constructor(position, width, height, color, velocity)
    {
        super(position, width, height, color, "paddle" ) //super calls the constructor of the parent class
        this.velocity = new Vec(0.0,0.0);
    }

    update(deltaTime)
    {
        this.position = this.position.plus(this.velocity.times(deltaTime));
        if(this.position.x < 20)
        {
            this.position.x = 20; //sets the limit of the paddle to the left
        }
        else if (this.position.x + this.width + 20> canvasWidth)
        {
            this.position.x = canvasWidth - this.width - 20; //sets the limit of the paddle to the right
        }
        
    }
}

class PowerUp extends GameObject //class for powerups
{
    constructor(position, width, height, color) 
    {
        super(position, width, height, color, "powerup");
        this.velocity = new Vec(0, 0.2); // velocity of the fall
    }

    update(deltaTime) {
        this.position = this.position.plus(this.velocity.times(deltaTime));
    }
}


//Definition of the objects
const box = new Ball(new Vec(canvasWidth / 2, canvasHeight - 80), 20, 20, "white");
const paddle = new Paddle(new Vec((canvasWidth / 2) - 60 , canvasHeight - 75), 120, 20, "#8A6DF2");

const topBar = new GameObject(new Vec(0,0), canvasWidth, 20, '#d8c6ff', "margin")
const bottomBar = new GameObject(new Vec(0,canvasHeight- 20), canvasWidth, 20, '#d8c6ff', "margin")

const leftGoal = new GameObject(new Vec(0,0), 20, canvasHeight, '#d8c6ff', "obstacle")
const rightGoal = new GameObject(new Vec(canvasWidth - 20, 0), canvasWidth - 20, canvasHeight, '#d8c6ff', "obstacle")


function createBlocks() //function that creates the blocks and stores them in an array
{
    const blockWidth = 85;
    const blockHeight = 25;

    const padding = 4; //space between blocks
 
    let columns = Math.floor(canvasWidth / (blockWidth + padding)); //calculates the number of columns

    let colors = ['#ff4d4d', '#ff9933', '#ffff66', '#66ff66', '#3399ff', 'blue', '#cc66ff']; // list of colors

    for (let j = 0; j <  rows; j++) {
        let color = colors[j % rows]; // alternates colors by row

        for (let i = 0; i < columns; i++) {
            let x = (i * (blockWidth + padding)) +  20; // separates the blocks horizontally, +20px for it to fit in the canvas
            let y = (j * (blockHeight + padding)) + 20; // separates the blocks vertically, +20px for it to fit in the canvas
            let block = new GameObject(new Vec(x, y), blockWidth, blockHeight, color);
            blocks.push(block); //stores the blocks in an array
        }
    }
}

function drawBlocks()
{
    for (let i = 0; i < blocks.length; i++)
    {
        blocks[i].draw(ctx); //draws each block in the array
        
        if(boxOverlap(box, blocks[i])) //condition for when the ball hits a block
        {
            let blockPosition = blocks[i].position;
            blocks.splice(i, 1); //removes the block from the array
            i--;
            //reference: https://es.stackoverflow.com/questions/1869/c%C3%B3mo-eliminar-un-objeto-de-un-arreglo-de-objetos-en-javascript-o-jquery
            box.velocity.y *= -1; //changes the direction of the ball
            score += 1; //adds 1 to the score

            if(Math.random() < 0.2) //20% chance of generating a powerup
            {
                let powerUp = new PowerUp(blockPosition.plus(new Vec(35, 10)), 20, 20, "#29F2F2");
                powerUps.push(powerUp); //stores the powerup in an array
            }

            if(blocks.length == 0) //if there are no more blocks
            {
                playing = false;
                const looseElement = document.getElementById('winValue'); //for HTML conection, shows the winning message
                looseElement.style.display = "block"  //shows the html element that was hidden
            }
        }
    }
}

function drawPowerUps(deltaTime) 
{
    for (let i = powerUps.length - 1; i >= 0; i--) //Iterate in reverse order to be able to remove elements from the array
    { 
        powerUps[i].draw(ctx); //draw the powerup
        powerUps[i].update(deltaTime);

        if (boxOverlap(powerUps[i], paddle))  //if the powerup hits the paddle
        { 
            box.velocity = box.velocity.times(1.3); //increases the speed of the ball
            powerUps.splice(i, 1); //eliminates the powerup after hitting the paddle
        } 
        else if (boxOverlap(powerUps[i], bottomBar) || powerUps[i].position.y > canvasHeight) 
        {
            powerUps.splice(i, 1); //eliminates the powerup if it reaches the bottom of the canvas
        }
    }
}


function main() {
    // Get a reference to the object with id 'canvas' in the page
    const canvas = document.getElementById('canvas');

    // Resize the element
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // Get the context for drawing in 2D
    ctx = canvas.getContext('2d');

    createEventListeners();
    createBlocks(); //calls the function that creates the array of blocks

    drawScene(0);
};

function createEventListeners()
{
    window.addEventListener('keydown', (event) => //when you have a key down
    {
        if(event.key == 'a' || event.code == 'ArrowLeft')
        {
            paddle.velocity = new Vec(-paddleVelocity, 0);
        }
        else if(event.key == 'd' || event.code == 'ArrowRight')
        {
            paddle.velocity = new Vec(paddleVelocity, 0);
        }
        else if(event.key == 'w' && !box.inPlay|| event.code == 'ArrowUp' && !box.inPlay)
        {
            box.initVelocity(); //initiates the ball's velocity
        }

    });

    window.addEventListener('keyup', (event) => //when you release the key
    {
        if(event.key == 'a' || event.code == 'ArrowLeft')
        {
            paddle.velocity = new Vec(-paddleVelocity, 0);
        }
        else if(event.key == 'd' || event.code == 'ArrowRight')
        {
            paddle.velocity = new Vec(paddleVelocity, 0);
        }
    });

    
}

function drawScene(newTime) {
    
    if(oldTime == undefined)
    {
        oldTime =  newTime;
    }
    let deltaTime = newTime - oldTime;
    
    // Clean the canvas so we can draw everything again
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw all elements
    topBar.draw(ctx); 
    bottomBar.draw(ctx);
    leftGoal.draw(ctx);
    rightGoal.draw(ctx);
    box.draw(ctx); //draws ball
    paddle.draw(ctx); //draws paddle
    
    drawBlocks(); //calls the function that draws the blocks
    drawPowerUps(deltaTime); //calls the function that draws the powerups

    

    const scoreElement = document.getElementById('scoreValue'); //for HTML conection, shows score value
    scoreElement.textContent = "Score: " + score;

    const livesElement = document.getElementById('livesValue'); //for HTML conection, shows lives value
    livesElement.textContent = "Lives: " + lives;


    //Update the properties of the object
    box.update(deltaTime);
    paddle.update(deltaTime);

    if (boxOverlap(box,leftGoal) || boxOverlap(box,rightGoal))
    {
        box.velocity.x *= -1;

    }
    
    if (boxOverlap(box, topBar) || boxOverlap(box, paddle))
    {
        box.velocity.y *= -1;
    }

    if (boxOverlap(box, bottomBar))
    {
        lives -= 1;
        if(lives != 0)
        {
            paddle.width = Math.max(paddle.width * 0.9, 30) //changes the width of the paddle, can't be less than 30px
            box.reset();

        }
        else
        {
            playing = false;
            const looseElement = document.getElementById('looseValue'); //for HTML conection, shows the loosing message
            looseElement.style.display = "block"  //shows the html element that was hidden
        }
        
    }
    oldTime = newTime;
    
    if(playing)
    {
        requestAnimationFrame(drawScene); //when it finishes the function, it calls itself again and draws again
    }
 
}

