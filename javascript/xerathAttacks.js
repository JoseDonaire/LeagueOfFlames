class XertahAttacks {
  constructor(yParam, srcParam, speedParam) {
    this.image = new Image();
    this.image.src = srcParam;
    this.x = canvas.width;
    this.y = yParam;
    this.w = 80;
    this.h = 80;
    this.speed = speedParam;
  }
  drawImage = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  xertahAttacksMovement = () => {
    this.x = this.x - this.speed;
  };
}
