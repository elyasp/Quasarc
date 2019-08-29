class Wave {
    constructor(game) {
        this.game = game;
        this.startRadian = Math.random() * Math.PI * 2;
        this.endRadian = (Math.PI * 2 + this.startRadian + 0.95) % (Math.PI * 2);;
        this.waveRadius = 700;
        this.decreaseSpeed = this.game.waveSpeed;
        this.color = `hsla(${Math.random() * 360}, 100%, 35%, 1)`
    }

    drawWaves() {

        this.game.ctx.globalCompositeOperation = 'overlay'
        this.game.ctx.strokeStyle = this.color
        this.game.ctx.lineWidth = 25;
        this.game.ctx.lineCap = 'round';
        this.game.ctx.beginPath()
        this.game.ctx.arc(630, 235, this.waveRadius, this.endRadian, this.startRadian)
        this.game.ctx.stroke()
        this.game.ctx.closePath()
        
    }

    radiusDecrease() {
        if (this.waveRadius > 4 ) {
            this.waveRadius -= this.decreaseSpeed
        }
    }

    waveRemover() {
        if (this.waveRadius < 5) {
            this.game.waves.shift()
            this.game.waveCounter.score++;
        }
    }
} 