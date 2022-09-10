
//defining varibles
var mainColour;
let tSize = 32;


let Square = {};

function setup() {
    //creating canvas
    createCanvas(550, 550);

    //defining draw point of the rectangle
    rectMode(CENTER);
    colorMode(HSL, 360, 100, 100);
    //setting colour
    mainColour = color("grey");

    //defining the attributes of the square
    Square.x = 30;
    Square.y = 30;
    Square.size = 25;
    Square.fillColour = mainColour;
    Square.moveIncrement = 3;
}

function draw() {

    //setting thebackground colour
    background("skyBlue");

    //movement controls
    if (keyIsDown(UP_ARROW)) {
        Square.y -= Square.moveIncrement;
    }
    if (keyIsDown(DOWN_ARROW)) {
        Square.y += Square.moveIncrement;
    }
    if (keyIsDown(LEFT_ARROW)) {
        Square.x -= Square.moveIncrement;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        Square.x += Square.moveIncrement;
    }

    //Drawing square
    fill(Square.fillColour);
    square(Square.x, Square.y, Square.size);



    //drawing Maze
    rect(100, 50, 250, 5);
    rect(400, 50, 200, 5);
    rect(500, 125, 5, 150);
    rect(500, 250, 100, 5);
    rect(350, 100, 300, 5);
    rect(350, 150, 200, 5);
    rect(450, 250, 5, 100);
    rect(350, 200, 200, 5);
    rect(450, 175, 5, 50);
    rect(125, 100, 150, 5);
    rect(75, 150, 150, 5);
    rect(200, 150, 5, 100);
    rect(125, 200, 150, 5);
    rect(100, 350, 5, 200);
    rect(50, 250, 5, 100);
    rect(50, 350, 100, 5);
    rect(50, 450, 5, 100);
    rect(500, 375, 5, 150);
    rect(450, 500, 5, 100);
    rect(475, 450, 50, 5);
    rect(225, 500, 350, 5);
    rect(150, 400, 5, 200);
    rect(200, 350, 5, 300);
    rect(175, 250, 50, 5);
    rect(250, 350, 5, 200);
    rect(300, 450, 200, 5);
    rect(325, 250, 150, 5);
    rect(400, 400, 200, 5);
    rect(275, 350, 50, 5);
    rect(300, 325, 5, 50);
    rect(375, 300, 150, 5);
    rect(400, 350, 100, 5);
}