class Controls {
    constructor(game) {
        this.game = game;
    }

    moveClockwise() {
        
        this.game.ship.angle += 0.09;
        this.game.draw()
        console.log('moveClockwise')
    }

    moveCounterwise() {
        this.game.ship.angle -= 0.09;
        this.game.draw()
       console.log('moveCounterwise')
    }



    setKeyBindings() {
        window.addEventListener('keydown', event => {
            //event.preventDefault();
            const key = event.keyCode;
            if (key >= 37 && key <= 39) {
                switch (key) {
                    case 37:
                        this.moveCounterwise()
                        console.log('LeftKey')
                        break;
                    case 39:
                        this.moveClockwise()
                        console.log('RightKey')
                        break;
                }
            }
        })
    } // -- F 



} // ------ class 


