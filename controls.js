class Controls {
    constructor(game, handler) {
        this.game = game;
        this.controlHandler = handler;
    }

    // moveClockwise() {
    //     this.game.ship.angle = (Math.PI * 2 + this.game.ship.angle + 0.15) % (Math.PI * 2);
    // }

    // moveCounterwise() {
    //     this.game.ship.angle = (Math.PI * 2 + this.game.ship.angle - 0.15) % (Math.PI * 2);
    // }

    setKeyBindings() {
        const controlHandler = this.controlHandler;
    
        window.addEventListener('keydown', event => {
            event.preventDefault();
            const key = event.keyCode;
            if (key >= 37 && key <= 39) {
                switch (key) {
                    case 37:
                        controlHandler('leftKeyDown')
                        // this.moveCounterwise()
                        break;
                    case 39:
                        controlHandler('rightKeyDown')
                        // this.moveClockwise()
                        break;
                }
            }
        });

        window.addEventListener('keyup', event => {
            event.preventDefault();
            const key = event.keyCode;
            if (key >= 37 && key <= 39) {
                switch (key) {
                    case 37:
                        controlHandler('leftKeyUp')
                        // this.moveCounterwise()
                        break;
                    case 39:
                        controlHandler('rightKeyUP')
                        // this.moveClockwise()
                        break;
                }
            }
        });
    } // --- function


} // ------ class 