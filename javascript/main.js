
// * GLOBAL VARIABLES

// seccion de canvas y ctx
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// elementos de DOM
const splashScreenDOM = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameoverScreenDOM = document.querySelector("#gameover-screen")
const restartBtn = document.querySelector("#restart-btn")
const scoreDom = document.querySelector('h3 span')

// variables globales del juego
let game;
const startGame = () => {
    console.log("intentando inicar el juego");
    splashScreenDOM.style.display = "none";
    gameoverScreenDOM.style.display = "none";
    canvas.style.display = "block";
    game = new Game()
    game.audioInicio.play()
    game.audioInicio.volume = 0.2;
    console.log(game)
    game.gameLoop()
  };
  


// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame)
 //movimiento yasuo
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA" ) {
    // aqui muevo el yasuo a la izquierda
   game.yasuo.moveX(-1);
  } else if (event.code === "KeyD" )  {
    // aqui muevo el yasuo a la derecha
    game.yasuo.moveX(+1);
  }else if (event.code === "KeyW")  {
    // aqui muevo el yasuo arriba
    game.yasuo.moveY(-1); 
  }else if (event.code === "KeyS")  {
    // aqui muevo el yasuo abajo
    game.yasuo.moveY(+1);
  }
});