class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.ship = new Ship(this);
        this.hole = new Hole(this);
        this.wave = new Wave(this);
        this.controls = new Controls(this);
        this.waveCounter = new Counter(this)
        this.controls.setKeyBindings();
        this.waves = [];
        this.waveFrequency = 95 // ==================== DISTANCE BETWEEN WAVES
        this.timer = 0;
        this.counter = 0;
        this.SPEED = 12000 // ======================== TIME INTERVAL FOR WAVE FREQUENCY & WAVE SPEED INCREASAL 
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
            // console.log("wave was pushed", this.waves)
        }

        if (this.timer < timestamp - this.SPEED) {
            console.log("speed was changed, actual speed", this.waveIncreaser)
            this.waveIncreaser += 0.25
            this.waveFrequency -= 1
            this.timer = timestamp
        }
        //this changes the radius of the waves with the general game speed
        this.waves.map(waveObject => waveObject.radiusDecrease())
        this.waves.map(waveObject => waveObject.waveRemover())
        this.collisionDetect();

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

    collisionDetect() {
        
        for (let waveObject of this.waves) {
            if (waveObject.waveRadius > 70 && waveObject.waveRadius < 90) {
                // debugger;
                const angle = (this.ship.angle + Math.PI) % (Math.PI * 2);
                const start = (waveObject.startRadian + Math.PI / 2) % (Math.PI * 2);
                const end = (waveObject.endRadian + Math.PI / 2) % (Math.PI * 2);
                if (!(angle > start && angle < end)) {
                    console.log('You hit the wave!')






                }
            }
        }
    }
}