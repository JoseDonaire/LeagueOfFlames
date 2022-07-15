class Game {
  constructor() {
    this.grieta = new Image();
    this.grieta.src = "./images/grieta.png";
    this.isGameOn = true;
    this.yasuo = new Yasuo();
    this.xerath = new Image();
    this.xerath.src = "./images/xerath.png";
    this.xerathAttacksArr = [];
    this.flame = new Flame();
    this.score = 0;
    this.attackSpeed = 2;
    this.audioInicio = new Audio('./sounds/inicio.mp3')
    this.audioAtaque = new Audio("./sounds/ataques.mp3");
    this.audioDerrota = new Audio("./sounds/derrota.mp3");
    this.audioBlame1 = new Audio("./sounds/blame1.mp3");
    this.audioBlame2 = new Audio("./sounds/blame2.mp3");
    this.audioBlame3 = new Audio("./sounds/blame3.mp3");
    this.audioBlame4 = new Audio("./sounds/blame4.mp3");
    this.audioBlame5 = new Audio("./sounds/blame5.mp3");
    this.audioBlame6 = new Audio("./sounds/blame6.mp3");
  }
  scoreReaction = () => {
    if (this.score % 3 === 0) {
      let randomNumber = Math.random();
      if (randomNumber < 0.1) {
        this.flame.image.src = "./images/flame1.png";
      } else if (randomNumber > 0.2 && randomNumber < 0.3) {
        this.flame.image.src = "./images/flame2.png";
      } else if (randomNumber > 0.3 && randomNumber < 0.4) {
        this.flame.image.src = "./images/flame3.png";
      } else if (randomNumber > 0.4 && randomNumber < 0.5) {
        this.flame.image.src = "./images/flame4.png";
      } else if (randomNumber > 0.5 && randomNumber < 0.6) {
        this.flame.image.src = "./images/flame5.png";
      } else if (randomNumber > 0.6 && randomNumber < 0.7) {
        this.flame.image.src = "./images/flame6.png";
      } else if (randomNumber > 0.7 && randomNumber < 0.8) {
        this.flame.image.src = "./images/flame7.png";
      } else if (randomNumber > 0.8 && randomNumber < 0.9) {
        this.flame.image.src = "./images/flame8.png";
      } else {
        this.flame.image.src = "./images/flame9.png";
      }
    }
  };
  velocityAttacks = () => {
    if (this.score % 3 === 0) {
      this.attackSpeed = this.attackSpeed + 0.5;
    }
  };
  removeXerathAttacksFromArray = () => {
    console.log(this.xerathAttacksArr.length);
    if (this.xerathAttacksArr[0].x + this.xerathAttacksArr[0].w < 0) {
      this.xerathAttacksArr.shift();
    }
  };
  scoreDodge = () => {
    if (this.xerathAttacksArr[0].x + this.xerathAttacksArr[0].w < 0) {
      this.score = this.score + 1;
      scoreDom.innerText = this.score;
      if (this.score === 1) {
        this.audioAtaque.play();
        this.audioAtaque.loop = true;
        this.audioAtaque.volume = 0.1;
      }
      if (this.score === 10) {
        this.audioBlame1.play();
        this.audioBlame1.volume = 0.1;
      } else if (this.score === 15) {
        this.audioBlame2.play();
        this.audioBlame2.volume = 0.1;
      } else if (this.score === 25) {
        this.audioBlame3.play();
        this.audioBlame3.volume = 0.1;
      } else if (this.score === 35) {
        this.audioBlame4.play();
        this.audioBlame4.volume = 0.1;
      } else if (this.score === 45) {
        this.audioBlame5.play();
        this.audioBlame5.volume = 0.1;
      } else if (this.score === 55) {
        this.audioBlame6.play();
        this.audioBlame6.volume = 0.1;
      }
      this.scoreReaction();
      this.velocityAttacks();
    }
  };

  yasuoAttackCollision = () => {
    this.xerathAttacksArr.forEach((eachAttack) => {
      if (
        eachAttack.x < this.yasuo.x + this.yasuo.w &&
        eachAttack.x + eachAttack.w > this.yasuo.x &&
        eachAttack.y < this.yasuo.y + this.yasuo.h / 2 &&
        eachAttack.h / 2 + eachAttack.y > this.yasuo.y
      ) {
        this.gameOver();
      }
    });
  };
  gameOver = () => {
    this.isGameOn = false;
    canvas.style.display = "none";
    gameoverScreenDOM.style.display = "flex";
    if (this.isGameOn === false) {
      this.audioInicio.pause();
      this.audioAtaque.pause();
      this.audioBlame1.pause();
      this.audioBlame2.pause();
      this.audioBlame3.pause();
      this.audioBlame4.pause();
      this.audioBlame5.pause();
      this.audioBlame6.pause();
      this.audioDerrota.play();
      this.audioDerrota.volume = 0.1;
    }
  };
  automaticAddXerathAttacks = () => {
    if (
      this.xerathAttacksArr.length === 0 ||
      this.xerathAttacksArr[this.xerathAttacksArr.length - 1].x <
        canvas.width / 2
    ) {
      // 1. si el array está vacio
      // 2. si el ULTIMO elemento del array, ha pasado la mitad del canvas

      let randomPositionY = Math.random() * canvas.height;
      let randomImage = Math.random();
      if (randomImage < 0.5) {
        randomImage = "./images/rayo.png";
      } else {
        randomImage = "./images/bola-energia.png";
      }
      let newAttack1 = new XertahAttacks(
        randomPositionY,
        randomImage,
        this.attackSpeed
      );
      this.xerathAttacksArr.push(newAttack1);
      let newAttack2 = new XertahAttacks(
        randomPositionY,
        randomImage,
        this.attackSpeed
      );
      this.xerathAttacksArr.push(newAttack2);
    }
  };
  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.yasuoAttackCollision();
    this.automaticAddXerathAttacks();
    this.xerathAttacksArr.forEach((eachAttack) => {
      eachAttack.xertahAttacksMovement();
    });
    this.removeXerathAttacksFromArray();
    this.scoreDodge();
    ctx.drawImage(this.grieta, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.xerath, 1100, 100, 220, 220);
    this.yasuo.drawImage();
    this.xerathAttacksArr.forEach((eachAttack) => {
      eachAttack.xertahAttacksMovement();
    });
    this.xerathAttacksArr.forEach((eachAttack) => {
      eachAttack.drawImage();
    });
    if (this.score > 4) {
      this.flame.drawFlame();
    }
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
