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
        const angle = 0;
        const ctx = this.game.ctx;
        ctx.save();
        // ctx.translate(605, 145);
        ctx.translate(650, 285);
        // ctx.rotate(0.25 * Math.PI);
        ctx.translate(-70, -100);
        ctx.rotate((angle / 360)  * Math.PI);

        // ctx.rotate(0.25 * Math.PI);
        const radius = 0;
        ctx.drawImage(this.image, radius, radius, 50, 50)
        ctx.strokeStyle = 'red';
        ctx.strokeRect(radius, radius, 50, 50);
        
        ctx.restore();
        console.log('Ship should appear')
    }


} // --game;