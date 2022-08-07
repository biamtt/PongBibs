//racket size
let xRacket = [5, 485];
let yRacket = [110, 110];
let wRacket = 10;
let hRacket = 60;
let speedYPlayer;
let collided = false;

function showRacket(){
    rect (xRacket[0], yRacket[0], wRacket, hRacket);
    rect (xRacket[1], yRacket[1], wRacket, hRacket);
}

function racketPlayer1Move(){
    if (keyIsDown(UP_ARROW)){
        yRacket[0] -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRacket[0] += 10;
    }
}

function racketPlayer2Move(){
    speedYPlayer = yBall - yRacket[1] - hRacket / 2 - 30;
    yRacket[1] += speedYPlayer;
}

function racketPlayers(x, y){
    collided = collideRectCircle(x, y, wRacket, hRacket, xBall, yBall, rBall);
    if (collided){
      speedXBall *= -1;
    }
  }