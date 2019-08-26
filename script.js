let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let game = new Game(canvas);

window.addEventListener('load', function () {
  
  game.operateShip()
  game.drawEnemy();
})

function startGame() {
  game.operateShip()
  game.drawEnemy();
  //window.requestAnimationFrame(startGame)
}

startGame()