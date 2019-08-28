// eslint-disable-next-line no-unused-vars
class Ship {
    constructor(game) {
        this.game = game;
        this.image = new Image()
        this.image.src = "images/spaceship.png"
        this.angle = 0;
        this.radius = 70;

    }


    drawShip() {
        const ctx = this.game.ctx;
        ctx.save();
        ctx.translate(630, 235);
        ctx.rotate(this.angle);

        ctx.drawImage(this.image, -15, this.radius, 20, 30)
        ctx.restore();

        console.log('Ship should appear, from Ship.drawShip')
    }

    



} // --game;

