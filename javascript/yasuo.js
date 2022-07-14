const MOVE_DISTANCE = 15;
class Yasuo {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/yasuo.png";
    this.x = 100;
    this.y = 300;
    this.w = 180;
    this.h = 120;
  }

  drawImage = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  moveY = (direction = 1) => {
    const newY = this.y + MOVE_DISTANCE * direction;
    const isInside = newY > 0 && newY + this.h < canvas.height;
    if (isInside) {
      this.y = newY;
    }
  };
  moveX = (direction = 1) => {
    const newX = this.x + MOVE_DISTANCE * direction;
    const isInside = newX > 0 && newX + this.w < canvas.width;
    if (isInside) {
      this.x = newX;
    }
  };
}
