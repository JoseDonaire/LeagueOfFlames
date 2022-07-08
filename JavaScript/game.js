class Game {
    constructor() {

      this.grieta = new Image();
      this.grieta.src = './Images/grieta.png';
      this.isGameOn = true;
      
    }
}
  
    // .todos los metodos del juego (ej: las funciones que teniamos ayer en el pong)
  
    //  para limpiar el array cuando los elementos salen del canvas
   
  
    // efecto de gameover
  
  
    // colision yasuo con ataques 
    
  
  
    // spawn de los ataques aleatorios  
   
  //gameLoop
    gameLoop = () => {
     // 1. Limpiamos el canvas
     ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // 2. colision con ataques
  

     //borrar del array ataques que se van 
  
      // 3. Dibujar los elementos
      //imagen
      ctx.drawImage(this.grieta, 0, 0, canvas.width, canvas.height);
      //yasuo
      //ataque1
      //ataque2
      
      // 4. Efecto de recursión
      if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
      //}
    };
}