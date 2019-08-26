class Controls {
    constructor(ship) {
        this.ship = ship;
        this.angle = 0
    }

    moveClockwise() {
        this.game.ctx.rotate(this.angle)
        this.ship.drawShip()
       console.log('function')
    }

    moveCounterWise() {
       // this.game.ctx.rotate(this.angle)
       // this.ship.drawShip()
       console.log('function')
    }



    setKeyBindings() {
        window.addEventListener('keydown', event => {
            event.preventDefault();
            const key = event.keyCode;
            if (key >= 37 && key <= 39) {
                switch (key) {
                    case 37:
                        this.moveCounterWise()
                        this.angle -= 0.07;
                        console.log('Left')
                        break;
                    case 39:
                        this.moveClockwise()
                        this.angle += 0.07;
                        console.log('Right')
                        break;
                }
            }
        })
    } // -- F 



} // ------ class 


