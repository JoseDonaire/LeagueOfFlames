class XertahAttacks {
    constructor(yParam,srcParam,speedParam) {
      // aqui todas las propiedades xertahAttacks1
      this.image = new Image();
      this.image.src = srcParam;
      this.x = canvas.width;
      this.y = yParam;
      this.w = 80;
      this.h = 80;
      this.speed = speedParam;
    }
  
    // aqui todos los metodos de xertahAttacks1
    drawXerathAttacks = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
    
  
    xertahAttacksMovement = () => {
      this.x = this.x - this.speed
    };
  }