function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(0);
  showBall();
  moveBall();
  freeBall();
  checkBorder();
  showRacket();
  racketPlayer1Move();
  racketPlayers(xRacket[0], yRacket[0]);
  racketPlayer2Move();
  racketPlayers(xRacket[1], yRacket[1]);
  scoreBoard();
  scores();
  }

