class Wave {
    constructor(game) {
        this.game = game;
    }

    drawWaves() {


        let startRadian = Math.random() * 10;
        let endRadian = startRadian + 5.3

        this.game.ctx.strokeStyle = '#ed0000'
        this.game.ctx.lineWidth = 10;
        this.game.ctx.beginPath()
        this.game.ctx.arc(630, 235, 80, startRadian, endRadian)
        this.game.ctx.stroke()
        this.game.ctx.closePath()
        console.log('Waves activated from generator')
        console.log(this.radian)

    }

    waveCollision() {

    }


    }
