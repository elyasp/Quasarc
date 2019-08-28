class Wave {
    constructor(game) {
        this.game = game;
        this.startRadian = Math.random() * 10;
        this.endRadian = this.startRadian + 5.3
    }

    drawWaves() {

        this.game.ctx.globalCompositeOperation = 'overlay'
        this.game.ctx.strokeStyle = '#ed0000'
        this.game.ctx.lineWidth = 15;
        this.game.ctx.beginPath()
        this.game.ctx.arc(630, 235, 10, this.startRadian, this.endRadian)
        this.game.ctx.stroke()
        this.game.ctx.closePath()

        
        this.game.ctx.strokeStyle = '#ed0000'
        this.game.ctx.lineWidth = 15;
        this.game.ctx.beginPath()
        this.game.ctx.arc(630, 235, 365, this.startRadian, this.endRadian)
        this.game.ctx.stroke()
        this.game.ctx.closePath()


    }
    
    RandomRadius() {
        
    }

    waveCollision() {

    }


    }
