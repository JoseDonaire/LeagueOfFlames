class Game {
    constructor() {

      this.grieta = new Image();
      this.grieta.src = './Images/grieta.png';
      this.isGameOn = true;
      this.yasuo= new Yasuo();
      this.xerath = new Image();
      this.xerath.src = './images/xerath.png'
      this.xerathAttacksArr = []
      this.flame = new Flame()
      this.score = 0;
      this.attackSpeed = 2
    }

  
    //  todos los metodos del juego 
  
    //reacción al aumento de bonus
    scoreReaction = ()=>{
      if (this.score % 3 === 0){
        let randomNumber = Math.random()
        if(randomNumber < 0.2){
          // acceder al flame propiedad y le cambias el src
          this.flame.image.src = './images/flame1.png'
       }else if(randomNumber >0.2 && randomNumber<0.4){
        this.flame.image.src = './images/flame2.png'
       }else if(randomNumber > 0.4 && randomNumber <0.6){
        this.flame.image.src = './images/flame3.png'
       }else if (randomNumber >0.6 && randomNumber < 0.8){
        this.flame.image.src = './images/flame4.png' 
       }else{
        this.flame.image.src  = './images/flame5.png'
       }
      }
    }

    velocityAttacks=() => {
      // cuando sea multiplo de 4 entonces aumentta la velocidad en 1
      if(this.score % 3 === 0){
        this.attackSpeed = this.attackSpeed + 0.5
        // quieres cambiar la velocidad de ataque de LOS ataques NUEVOS
        // cambiar la velocidad de TODOS los ataques actual de array
       }
    } 
  
    //  para limpiar el array cuando los elementos salen del canvas 
    removeXerathAttacksFromArray = () => {
      console.log(this.xerathAttacksArr.length)
      if (this.xerathAttacksArr[0].x  + this.xerathAttacksArr[0].w < 0) {
        this.xerathAttacksArr.shift()
      }
    }
    // score y flames
    scoreDodge = ()=>{
    if(this.xerathAttacksArr[0].x + this.xerathAttacksArr[0].w < 0){
      this.score = this.score + 1
      scoreDom.innerText  =this.score
      // aqui es donde invocamos la funcion que cambia el src del Flame
      this.scoreReaction()
      this.velocityAttacks()
    }
    }
  
  
    // colision yasuo con ataques 
    yasuoAttackCollision = () => {
      this.xerathAttacksArr.forEach((eachAttack) => {

        if (eachAttack.x < this.yasuo.x + this.yasuo.w &&
          eachAttack.x + eachAttack.w > this.yasuo.x &&
          eachAttack.y < this.yasuo.y + this.yasuo.h &&
          eachAttack.h + eachAttack.y > this.yasuo.y) {

          this.gameOver()
      }
  
      })
    }
    // efecto de gameover
    gameOver = () => {
      this.isGameOn = false;
      canvas.style.display = "none"
      gameoverScreenDOM.style.display = "flex"
    }
  
  
    
    // spawn de los ataques aleatorios  
    automaticAddXerathAttacks = () => {
      if (this.xerathAttacksArr.length === 0 || this.xerathAttacksArr[this.xerathAttacksArr.length - 1].x < canvas.width / 2) {
        // 1. si el array está vacio
        // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas
  
        let randomPositionY = Math.random() * canvas.height
        let randomImage = Math.random() 
        if(randomImage < 0.5){
          randomImage = "./images/rayo.png"
        }else{
          randomImage = "./images/bola-energy.png"
        }
        let newAttack1= new XertahAttacks(randomPositionY,randomImage,this.attackSpeed)
        this.xerathAttacksArr.push(newAttack1)
        let newAttack2 = new XertahAttacks(randomPositionY,randomImage,this.attackSpeed)
        this.xerathAttacksArr.push(newAttack2)
  
      }
    }
   
  //gameLoop
    gameLoop = () => {
     // 1. Limpiamos el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // 2. colision con ataques
      this.yasuoAttackCollision()
      this.automaticAddXerathAttacks()
     //borrar del array ataques que se van 
     this.xerathAttacksArr.forEach((eachAttack) => {
      eachAttack.xertahAttacksMovement()
    })
     this.removeXerathAttacksFromArray()
     //score
     this.scoreDodge()
      // 3. Dibujar los elementos
      //imagen
      ctx.drawImage(this.grieta, 0, 0, canvas.width, canvas.height);
      //xerath
      ctx.drawImage(this.xerath, 1100, 100, 400, 280);
      //yasuo
      this.yasuo.drawYasuo()
      //ataque xerath
      this.xerathAttacksArr.forEach((eachAttack) => {
        eachAttack.xertahAttacksMovement()
      })
      this.xerathAttacksArr.forEach((eachAttack) => {
        eachAttack.drawXerathAttacks()
      })

      // aqui siempre dibujas la llama
      // si el score es +4 entonces dibuja
      if(this.score > 4){
      this.flame.drawFlame()
      }
      // 4. Efecto de recursión
      if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
      //}
    };
  } 
}