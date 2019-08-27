class Wave {
    constructor(game) {
        this.game = game;
    }

    drawWaves() {


        let startRadian = Math.random() * 10;
        let endRadian = startRadian + 5.3

        this.game.ctx.strokeStyle = '#ed0000'
        this.game.ctx.lineWidth = 15;
        this.game.ctx.beginPath()
        this.game.ctx.arc(630, 235, 400, startRadian, endRadian)
        this.game.ctx.stroke()
        this.game.ctx.closePath()

        this.game.ctx.strokeStyle = '#ed0000'
        this.game.ctx.lineWidth = 15;
        this.game.ctx.beginPath()
        this.game.ctx.arc(630, 235, 200, startRadian, endRadian)
        this.game.ctx.stroke()
        this.game.ctx.closePath()

    }

    waveCollision() {

    }


    }
