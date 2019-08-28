class Controls {
    constructor(game) {
        this.game = game;
    }

    moveClockwise() {
        this.game.ship.angle += 0.15;
        
    }

    moveCounterwise() {
        this.game.ship.angle -= 0.15;
        
    }



    setKeyBindings() {
        window.addEventListener('keydown', event => {
            event.preventDefault();
            const key = event.keyCode;
            if (key >= 37 && key <= 39) {
                switch (key) {
                    case 37:
                        this.moveCounterwise()
                        break;
                    case 39:
                        this.moveClockwise()
                        break;
                }
            }
        })
    } // -- F 



} // ------ class 


