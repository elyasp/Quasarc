// eslint-disable-next-line no-unused-vars
class Ship {
    constructor(game) {
        this.game = game;
        this.image = new Image()
        this.image.src = "images/spaceship.png"
        this.controls = new Controls(this)
        this.controls.setKeyBindings()

    }


    drawShip() {
        this.game.ctx.drawImage(this.image, 605, 145, 50, 50)
        console.log('Ship should appear')
    }


} // --game