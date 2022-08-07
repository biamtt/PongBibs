//score code
let myScore = 0;
let pcScore = 0;

function scoreBoard(){
    stroke(255);
    textSize(14);
    fill(255,69,0);
    rect(138, 11, 30, 20);
    fill(255);
    text(myScore, 150, 26);
    fill(255, 69, 0);
    rect(338, 11, 30, 20);
    fill(255);
    text (pcScore, 350, 26);
}

function scores(){
    if (xBall > 490){
        myScore += 1;
    }
    if (xBall < 8){
        pcScore += 1;
    }
}