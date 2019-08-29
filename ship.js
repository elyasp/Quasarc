// eslint-disable-next-line no-unused-vars
class Ship {
    constructor(game) {
        this.game = game;
        this.image = new Image()
        this.image.src = "images/spaceship.png"
        this.angle = 4.7;
        this.radius = 65;
        this.collisionLength = (this.angle)
        
    }


    drawShip() {
        const ctx = this.game.ctx;
        ctx.save();
        ctx.translate(630, 235);
        ctx.rotate(this.angle);

        ctx.drawImage(this.image, -15, this.radius, 30, 40)
        ctx.restore();
    }

    collisionDetect() {
        if (this.game.wave.waveRadius > 70 && this.game.wave.waveRadius < 103) {
            console.log('collision')
        }

    }

} // --game;

