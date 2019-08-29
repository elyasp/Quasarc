class Controls {
    constructor(game) {
        this.game = game;
    }

    moveClockwise() {
        this.game.ship.angle = (Math.PI * 2 + this.game.ship.angle + 0.15) % (Math.PI * 2);

    }

    moveCounterwise() {
        this.game.ship.angle = (Math.PI * 2 + this.game.ship.angle - 0.15) % (Math.PI * 2);

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
    } // --- function


} // ------ class 