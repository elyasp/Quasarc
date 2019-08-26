class Controls {
    constructor(ship) {
        this.ship = ship;
        this.left = 0
        this.right = 0
    }

    moveClockwise() {
        this.ship.game.ctx.rotate(this.right)
        this.ship.drawShip()
       console.log('function')
    }

    moveCounterWise() {
       this.ship.game.ctx.rotate(this.left)
       this.ship.drawShip()
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
                        this.left -= 0.001;
                        console.log('Left')
                        break;
                    case 39:
                        this.moveClockwise()
                        this.right += 0.001;
                        console.log('Right')
                        break;
                }
            }
        })
    } // -- F 



} // ------ class 


