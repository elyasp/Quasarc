class Controls {
    constructor(game, handler) {
        this.game = game;
        this.controlHandler = handler;
    }

    setKeyBindings() {
        const controlHandler = this.controlHandler;
    
        window.addEventListener('keydown', event => {
            event.preventDefault();
            const key = event.keyCode;
            if (key >= 37 && key <= 39) {
                switch (key) {
                    case 37:
                        controlHandler('leftKeyDown')
                        break;
                    case 39:
                        controlHandler('rightKeyDown')
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
                        break;
                    case 39:
                        controlHandler('rightKeyUp')
                        break;
                }
            }
        });
    } // --- function


} // ------ class 