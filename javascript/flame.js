class Flame {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/flame1.png";
    this.x = 0;
    this.y = 0;
    this.w = 150;
    this.h = 150;
  }
  drawFlame = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
