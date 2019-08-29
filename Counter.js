class Counter {
    constructor(game) {
        this.game = game;
        this.score = 0;
    }

    survivedWaves () {

        this.game.ctx.font = "100px Arial ";
        this.game.ctx.fillStyle = "#35168a";
        this.game.ctx.fillText(this.score, 580, 100);
        
    }

}