class Hole {
    constructor(game) {
        this.game = game
        this.photo = new Image();
        this.photo.src = "images/blackhole.png"
        this.rotator = 0
    }

    drawCentre () {
        
        this.game.ctx.save();
        this.game.ctx.translate(630, 235);
        this.game.ctx.rotate(this.rotator);
        this.game.ctx.drawImage(this.photo, -60, -60, 120, 120)
        this.game.ctx.restore();
    }

    turn () {
        this.rotator -= 0.05
    }
}