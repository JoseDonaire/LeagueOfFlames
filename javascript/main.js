const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

const splashScreenDOM = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameoverScreenDOM = document.querySelector("#gameover-screen");
const restartBtn = document.querySelector("#restart-btn");
const scoreDom = document.querySelector("h3 span");

let game;
const startGame = () => {
  console.log("intentando inicar el juego");
  splashScreenDOM.style.display = "none";
  gameoverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  game = new Game();
  game.audioInicio.play();
  game.audioInicio.volume = 0.2;
  console.log(game);
  game.gameLoop();
};

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    game.yasuo.moveX(-1);
  } else if (event.code === "KeyD") {
    game.yasuo.moveX(+1);
  } else if (event.code === "KeyW") {
    game.yasuo.moveY(-1);
  } else if (event.code === "KeyS") {
    game.yasuo.moveY(+1);
  }
});
