class Ball {
  
    constructor() {
        this.r = 10;
        this.reset();
    }
  
  
  
    update() {

        if (this.y < this.r || this.y > height - this.r) {
            this.ySpeed = -this.ySpeed;
        } 

        if (this.x < this.r ) {
          computerScore.increment();
        	this.reset();
        } else if (this.x > width + this.r) {
          playerScore.increment();
            this.reset();
        }
         
        this.x += this.xSpeed;
        this.y += this.ySpeed;
     
    }
  
  
  
    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = random(2, 3);
      
        let isLeft = random(1) > .5;
        if (isLeft) {
            this.xSpeed = -this.xSpeed;
        }
        this.ySpeed = (-1.5, 1.5);
    }
    display() {
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        fill(128,255,0);
    }
  
  
    hitPlayer(player) {
        if (this.x - this.r <= player.x + player.width && this.x > player.x) {
            if(this.isSameHeight(player)) {
                this.xSpeed = -this.xSpeed;
            }
        }
    }
  
    hitComputer(computer) {
        if (this.x + this.r >= computer.x && this.x <= computer.x + computer.width) {
            if (this.isSameHeight(computer)) {
                this.xSpeed = -this.xSpeed;
            }
        } 
    }
    isSameHeight(player) {
        return this.y >= player.y && this.y <= player.y + player.height;
    }
}