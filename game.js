
class Game {
    constructor (canvas) {
    this.ctx = canvas.getContext('2d');
    this.ship = new Ship(this)
    this.hole = new Hole(this)

    }

    operateShip () {
        this.ship.drawShip()
        console.log('test')
    }

    drawEnemy() {
        this.hole.drawCentre()
        console.log('hole should appear')
    }


    

}

