class Game {
    constructor() {

      this.grieta = new Image();
      this.grieta.src = './Images/grieta.png';
      this.isGameOn = true;
      this.yasuo= new Yasuo();
      this.xerath = new Image();
      this.xerath.src = '/images/xerath.png'
      this.xerathAttacksArr = []
    }

  
    //  todos los metodos del juego 
    //limitar movimientos de yasuo al canvas
    limitYasuo = ()=>{

    }
    //reacción al aumento de bonus
    scoreReaction = ()=>{
      let randomImage = Math.random()
      let randomFlame = new Flame(randomImage)
      if (scoreDom > 130){
        if(randomImage < 0.2){
          randomImage = '/images/flame1.png'
       }else if(randomImage >0.2 && randomImage<0.4){
          randomImage = '/images/flame2.png'
       }else if(randomImage > 0.4 && randomImage <0.6){
          randomImage = '/images/flame3.png'
       }else if (randomImage >0.6 && randomImage < 0.8){
          randomImage = '/images/flame4.png' 
       }else{
          randomImage = '/images/flame5.png'
       }
      }else if(scoreDom < 180){
        if(randomImage < 0.2){
          randomImage = '/images/flame1.png'
       }else if(randomImage >0.2 && randomImage<0.4){
          randomImage = '/images/flame2.png'
       }else if(randomImage > 0.4 && randomImage <0.6){
          randomImage = '/images/flame3.png'
       }else if (randomImage >0.6 && randomImage < 0.8){
          randomImage = '/images/flame4.png' 
       }else{
          randomImage = '/images/flame5.png'
       }
      
      } else if(scoreDom > 300){
        if(randomImage < 0.2){
          randomImage = '/images/flame1.png'
       }else if(randomImage >0.2 && randomImage<0.4){
          randomImage = '/images/flame2.png'
       }else if(randomImage > 0.4 && randomImage <0.6){
          randomImage = '/images/flame3.png'
       }else if (randomImage >0.6 && randomImage < 0.8){
          randomImage = '/images/flame4.png' 
       }else{
          randomImage = '/images/flame5.png'
       }
      }else if(scoreDom > 400){
        if(randomImage < 0.2){
          randomImage = '/images/flame1.png'
       }else if(randomImage >0.2 && randomImage<0.4){
          randomImage = '/images/flame2.png'
       }else if(randomImage > 0.4 && randomImage <0.6){
          randomImage = '/images/flame3.png'
       }else if (randomImage >0.6 && randomImage < 0.8){
          randomImage = '/images/flame4.png' 
       }else{
          randomImage = '/images/flame5.png'
       }
      }
      return randomFlame
    }

    velocityAttacks=() => {
      if(scoreDom > 130){
        xerathAttacks.speed = xerathAttacks.speed + 2
      }else if(scoreDom > 300){
        xerathAttacks.speed = xerathAttacks.speed + 4
      }else if (scoreDom > 400){
        xerathAttacks.speed = xerathAttacks.speed + 6
      }else if(scoreDom > 600){
        xerathAttacks.speed = xerathAttacks.speed + 15
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
    if(this.xerathAttacksArr[0].x < 0){
     scoreDom.innerText = Number(scoreDom.innerText) + 1}
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
  
        let randomPositionY = Math.random() * 300
        let randomImage = Math.random() 
        if(randomImage < 0.5){
          randomImage = "/images/rayo.png"
        }else{
          randomImage = "/images/bola-energy.png"
        }
        let newAttack1= new XertahAttacks(randomPositionY,randomImage)
        this.xerathAttacksArr.push(newAttack1)
        let newAttack2 = new XertahAttacks(randomPositionY,randomImage)
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
     this.scoreReaction()
     this.velocityAttacks()
      // 3. Dibujar los elementos
      //imagen
      ctx.drawImage(this.grieta, 0, 0, canvas.width, canvas.height);
      //xerath
      ctx.drawImage(this.xerath, 1100, 100, 400, 280);
      //yasuo
      this.yasuo.drawYasuo()
      //ataque xerath
      //ataque1
      //ataque2
      this.xerathAttacksArr.forEach((eachAttack) => {
        eachAttack.xertahAttacksMovement()
      })
      this.xerathAttacksArr.forEach((eachAttack) => {
        eachAttack.drawXertahAttacks()
      })
      // 4. Efecto de recursión
      if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
      //}
    };
  }
} 