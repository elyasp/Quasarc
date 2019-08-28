let $canvas = document.querySelector('canvas')

let game = new Game($canvas);
window.addEventListener('load', function () {
 game.startGame()
})

