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

        /*
        const angle = 0;
        ctx.save();
        ctx.translate(0, 0);
        ctx.translate(605, 145);
        ctx.rotate(0.25 * Math.PI);
        ctx.translate(-70, -100);
        ctx.rotate((angle / 360)  * Math.PI);

        // ctx.rotate(0.25 * Math.PI);
        const radius = 5;
        ctx.drawImage(this.image, radius, radius, 30, 30)
        ctx.strokeStyle = 'red';
        ctx.strokeRect(radius, radius, 50, 50);
        
        ctx.restore();
        */
        console.log('Ship should appear, from Ship.drawShip')
    }

} // --game;

