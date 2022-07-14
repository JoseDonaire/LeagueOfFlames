
# LEAGUE OF FLAMES


## [See the Game](https://josedonaire.github.io/LeagueOfFlames/)


# Description

-Este juego se basa en esquivar los atacantes de Xerath y al esquivarlos aumentaremos nuestros score.

# Main Functionalities

- Para esquivar los ataques podremos movernos hacia abajo(KeyS) y arriba(KeyW), y hacia la derecha(KeyD) e izquierda(KeyA) en 
  la pantalla del juego.

# Backlog Functionalities

- Gracias a aumentar el score enviaremos mensajes provocativos que enfureceran al enemigo acelerando sus ataques.

# Proyect Structure

- game.js : Para la función de recursión.
- main.js : para los elementos DOM.
- xerathAttacks.js : Para la Class XerathAttacks. 
- yasuo.js : Para la Class Yasuo.
- flame.js : Para la Class Flame


Example:

## main.js

- startGame()

## game.js

- Game () {
    this.player;
}
- gameLoop () {}
- checkCollisions () {}

## yasuo.js 

- yasuo () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawYasuo () {}
- moveYasuo () {}

## xerathAttacks.js
- xerathAttacks () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawxerathAttacks () {}
- movexerathAttacks () {}


# States and Transitions

- Start Screen 
- Game Screen
- Lost Screen







