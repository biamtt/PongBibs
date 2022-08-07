//ball size
let xBall = 250;
let yBall = 150;
let dBall = 15;
let rBall = dBall / 2;

//ball speed
let speedXBall = 6;
let speedYBall = 6;

function showBall(){
    circle(xBall, yBall, dBall);
}

function moveBall(){
    xBall += speedXBall;
    yBall += speedYBall;
}

function checkBorder(){
    if (xBall + rBall > width ||
        xBall - rBall < 0){
            speedXBall *= -1;
        }
    if (yBall + rBall > height ||
        yBall - rBall < 0){
            speedYBall *= -1;
        }
}

function freeBall(){
    if (xBall - rBall < -8){
        xBall = 20;
    }
}