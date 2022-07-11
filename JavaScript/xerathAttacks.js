class XertahAttacks {
    constructor(yParam,srcParam) {
      // aqui todas las propiedades xertahAttacks1
      this.image = new Image();
      this.image.src = srcParam;
      this.x = canvas.width;
      this.y = yParam;
      this.w = 100;
      this.h = 100;
      this.speed = 2;
    }
  
    // aqui todos los metodos de xertahAttacks1
    drawXertahAttacks = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
    
  
    xertahAttacksMovement = () => {
      this.x = this.x - this.speed
    };
  }