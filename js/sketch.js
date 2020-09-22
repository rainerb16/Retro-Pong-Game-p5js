let playerPaddle;
let computerPaddle;
let ball;
let playerScore;
let computerScore;


function setup() {
  createCanvas(800, 700);
  playerPaddle = new Paddle(26);
  computerPaddle = new Paddle(width - 48);
  ball = new Ball();
  playerScore = new Score(width / 2 - 40);
  computerScore = new Score(width / 2 + 40);
}


function draw() {
  background(0);
  strokeWeight(3);
  playerPaddle.display();
  computerPaddle.display();
  playerPaddle.update();
  computerPaddle.update();
  
  processComputer();
  
  ball.update();
  ball.display();
  
  ball.hitPlayer(playerPaddle);
  ball.hitComputer(computerPaddle);
    
  
  // if (playerPaddle.isUp) {
  //   playerPaddle.up();
  // } else if (playerPaddle.isDown) {
  //   playerPaddle.down();
  // }
  
  processComputer();
  
  ball.update(playerScore, computerScore);
  ball.display();
  
  ball.hitPlayer(playerPaddle); 
  ball.hitComputer(computerPaddle); 
  
  stroke(255);
  line(width/2, 0, width/2, height);
  
  playerScore.display();
  computerScore.display();
}


function processComputer() {
  let middlePaddle = computerPaddle.y + computerPaddle.height / 2;
     
  if (middlePaddle > ball.y) {
      computerPaddle.isUp = true;
      computerPaddle.isDown = false;
  } else {
      computerPaddle.isDown = true;
      computerPaddle.isUp = false;
  }
}




function keyPressed() {
    if (keyCode == UP_ARROW) {
        playerPaddle.isUp = true;
    } else if (keyCode == DOWN_ARROW) {
        playerPaddle.isDown = true;
    }
}
 
function keyReleased() {
    if (keyCode == UP_ARROW) {
        playerPaddle.isUp = false;
    } else if (keyCode == DOWN_ARROW) {
        playerPaddle.isDown = false;
    }
}