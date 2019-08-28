class Controls {
    constructor(game) {
        this.game = game;
    }

    moveClockwise() {
        this.game.ship.angle += 0.1;
        this.game.draw()
        console.log('movedClockwise')
    }

    moveCounterwise() {
        this.game.ship.angle -= 0.1;
        this.game.draw()
       console.log('movedCounterwise')
    }



    setKeyBindings() {
        window.addEventListener('keydown', event => {
            event.preventDefault();
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


