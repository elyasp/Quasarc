class Hole {
    constructor(game) {
        this.game = game
        this.photo = new Image();
        this.photo.src = "images/blackhole.png"
    }



    drawCentre () {
        
        this.game.ctx.drawImage(this.photo, 590, 195, 80, 80)
        console.log('drawCentre(), class Hole should appear')

       
    }

}