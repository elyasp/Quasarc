class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.ship = new Ship(this);
        this.hole = new Hole(this);
        this.wave = new Wave(this);
        this.controls = new Controls(this);
        this.controls.setKeyBindings();
        this.waves = [];
        this.waveFrequency = 90 // ==================== DISTANCE BETWEEN WAVES
        this.timer = 0;
        this.counter = 0;
        this.SPEED = 12000  // ======================== TIME INTERVAL FOR WAVE FREQUENCY & WAVE SPEED INCREASAL 
        this.waveIncreaser = 2 // ===================== STARTING SPEED

    }
    startGame() {
        console.log("game started")
        this.loop(0)
    }

    loop(timestamp) {
        this.runLogic(timestamp);
        this.draw();
        this.counter += 1;
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

    runLogic(timestamp) {
        //this is where you define when are waves being pushed to the array
        if (this.counter % this.waveFrequency === 0) {
            this.waves.push(new Wave(this))
            //TODO erase waves that are not being used from the array
            console.log("wave was pushed")
        }

        if (this.timer < timestamp - this.SPEED) {
            console.log("speed was changed, actual speed", this.waveIncreaser)
            this.waveIncreaser += 0.25
            this.waveFrequency -= 1
            this.timer = timestamp
        }
        //this changes the radius of the waves with the general game speed
        this.waves.map(waveObject => waveObject.radiusDecrease())

    }

    clear() {
        this.ctx.clearRect(0, 0, 1260, 570)
    }

    draw() {
        this.clear();
        this.ship.drawShip();
        this.hole.drawCentre();
        this.waves.map(arrayObject => arrayObject.drawWaves())


    }

}