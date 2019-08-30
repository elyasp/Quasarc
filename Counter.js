class Counter {
    constructor(game) {
        this.game = game;
        this.score = 0;
        this.shield = 500;
    }

    survivedWaves () {
        this.game.ctx.font = "100px Rajdhani ";
        this.game.ctx.fillStyle = "#ed1000";
        this.game.ctx.fillText(this.score, 590, 100);
    }

    lives () {
        this.game.ctx.font = "35px Rajdhani ";
        this.game.ctx.fillStyle = "#ed1000";
        this.game.ctx.fillText('health: ' + this.shield, 550, 150);
    }

}