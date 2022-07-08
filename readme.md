
# LEAGUE OF FLAMES


## [See the Game](www.your-url-here.com)


# Description

-Este juego se basa en esquivar los atacantes de Xerath y al esquivarlos aumentaremos nuestros score.

# Main Functionalities

- Para esquivar los ataques podremos movernos hacia abajo y arriba, y hacia la derecha e izquierda en 
  la pantalla del juego.

# Backlog Functionalities

- Gracias a aumentar el score enviaremos mensajes provocativos que lo enfureceran al enemigo acelerando sus ataques.

# Proyect Structure

- game.js : Para la función de recursión.
- main.js : para los elementos DOM.
- xerathAttacks.js : Para la Class xerathAttacks. 
- yasuo.js : Para la Class yasuo.


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

# xerathAttacks.js
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
- Win Screen (bonus)






////Bonus
Xerath tendrá una barra de mana que irá descendiendo a lo largo de la partida. Y si consigues sobrevivir 
a todos sus ataques, tus compañeros te acompañaran a derribar su torre y ganarás.