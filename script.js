window.addEventListener('load', () => {
    const $canvas = document.querySelector('canvas');
    const game = new Game($canvas);
    game.start();
  });
  
let width = 1000
let height = window.innerHeight;