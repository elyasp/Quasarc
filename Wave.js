class Wave {
    constructor(game) {
        this.game = game;
        this.startRadian = Math.random() * 10;
        this.endRadian = this.startRadian + 5.3
        this.radius = 700
        this.decreaseSpeed = this.game.waveIncreaser
    }

    drawWaves() {

        this.game.ctx.globalCompositeOperation = 'overlay'
        this.game.ctx.strokeStyle = '#ed0000'
        this.game.ctx.lineWidth = 15;
        this.game.ctx.beginPath()
        this.game.ctx.arc(630, 235, this.radius, this.startRadian, this.endRadian)
        this.game.ctx.stroke()
        this.game.ctx.closePath()
    }

    radiusDecrease() {
        if (this.radius > 10 ) {
            this.radius -= this.decreaseSpeed
        }
    }



    waveCollision() {

    }

}