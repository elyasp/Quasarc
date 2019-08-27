let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let game = new Game(canvas);

window.addEventListener('load', function () {
  
  game.activateShip()
  game.drawEnemy();
})

function startGame() {
  game.activateShip()
  game.drawEnemy();
  //window.requestAnimationFrame(startGame)
}

startGame()