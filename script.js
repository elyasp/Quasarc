let $canvas = document.querySelector('canvas')

let game = new Game($canvas);
window.addEventListener('load', function () {
 game.startGame()
  // game.activateShip()
  // game.drawEnemy();
  // game.drawWaves();
})

// function startGame() {
//   game.activateShip()
//   game.drawEnemy();
//   game.drawWave();
//   //window.requestAnimationFrame(startGame)
// }

// startGame()