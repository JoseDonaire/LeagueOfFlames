class Yasuo {
    constructor() {
      // aqui todas las propiedades de yasuo
      this.image = new Image()
      this.image.src = '/images/yasuo.png'
      this.x = 100; 
      this.y = 300; 
      this.w = 180; 
      this.h = 120; 
  
    }
    
    // aqui todos los metodos del yasuo
  
    drawYasuo = () => {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
   
  
}