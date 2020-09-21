class Paddle {
    
    constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.height = 150;
        this.width = 15;
      
        this.isUp = false;
        this.isDown = false;
    }
  
    update() {
      if (this.isUp) {
      this.up();
    } else if (this.isDown) {
      this.down();
      }
    }
  
    display() {
        fill(217, 69, 95);
        rect(this.x, this.y, this.width, this.height);
    }
  
    up() {
        if (this.y > 0) {
          this.y -= 3;
        }
    }
  
  
    down() {
        if (this.y < height - this.height) {
          this.y += 3;
        }
    }
}