let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let game = new Game(canvas);

window.addEventListener('load', function () {
  
  game.operateShip()
  game.drawEnemy();
})