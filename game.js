
class Game {
    constructor (canvas) {
    this.ctx = canvas.getContext('2d');
    this.ship = new Ship(this)
    this.hole = new Hole(this)
    this.wave = new Wave (this)
    this.controls = new Controls(this)
    this.controls.setKeyBindings()
    this.SPEED = 300
    this.timer= 0

    }
    startGame(){
        console.log("game started")
      this.loop(0)
    }

    loop (timestamp) {
        // console.log("loop started")
        if (this.timer < timestamp - this.SPEED) {
        console.log("loop started")

          this.runLogic();
          this.draw();
          this.timer = timestamp;
        }
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
      }

    runLogic(){

    }

    activateShip () {
        this.ship.drawShip()
        console.log('ship activated from Game')
    }

    drawEnemy() {
        this.hole.drawCentre()
        console.log('blackhole called from Game.hole')
    }

    drawWave () {
        this.wave.drawWaves()
        console.log('Waves called from game.wave')
    }

    clear() {
        this.ctx.clearRect(0, 0, 1260, 570)
    }

    draw() {
        this.clear();
        this.ship.drawShip();
        this.hole.drawCentre();
        this.wave.drawWaves();
    }




    

}

