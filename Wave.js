class Wave {
    constructor(game) {
        this.game = game;
        this.startRadian = Math.random() * 10;
        this.endRadian = this.startRadian + 5.35
        this.radius = 700
        this.decreaseSpeed = this.game.waveIncreaser
        this.color = `hsla(${Math.random() * 360}, 100%, 35%, 1)`
    }

    drawWaves() {

        this.game.ctx.globalCompositeOperation = 'overlay'
        this.game.ctx.strokeStyle = this.color
        this.game.ctx.lineWidth = 25;
        this.game.ctx.lineCap = 'round';
        this.game.ctx.beginPath()
        this.game.ctx.arc(630, 235, this.radius, this.startRadian, this.endRadian)
        this.game.ctx.stroke()
        this.game.ctx.closePath()
    }

    radiusDecrease() {
        if (this.radius > 4 ) {
            this.radius -= this.decreaseSpeed
        }
    }

    waveRemover() {
        if (this.radius < 5) {
            this.game.waves.shift()
        }
    }


    waveCollision() {
        
    }

}