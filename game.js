
class Game {
    constructor (canvas) {
    this.ctx = canvas.getContext('2d');
    this.ship = new Ship(this)
    this.hole = new Hole(this)
    this.controls = new Controls(this)
    this.controls.setKeyBindings()

    }

    activateShip () {
        this.ship.drawShip()
        console.log('ship activated from Game')
    }

    drawEnemy() {
        this.hole.drawCentre()
        console.log('blackhole called from Game.hole')
    }

    clear(){
        this.ctx.clearRect(0,0, 1260, 570)
    }

    draw(){
        this.clear();
        this.ship.drawShip();
        this.hole.drawCentre();
    }


    

}

