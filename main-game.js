class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.ship = new Ship(this);
        this.hole = new Hole(this);
        this.wave = new Wave(this);
        this.controls = new Controls(this, control => this.controlHandler(control));
        this.waveCounter = new Counter(this)
        this.controls.setKeyBindings();
        this.waves = [];
        this.waveFrequency = 95 // ==================== DISTANCE BETWEEN WAVES
        this.timer = 0;
        this.counter = 0;
        this.SPEED = 10000 // ========================= TIME INTERVAL FOR WAVE FREQUENCY & WAVE SPEED INCREASAL 
        this.waveSpeed = 2.2 // ========================= STARTING SPEED
    }

    controlHandler (control) {
        switch (control) {
            case 'leftKeyDown':
                this.pressingLeftKey = true;
                break;
            case 'rightKeyDown':
                this.pressingRightKey = true;
                break;
            case 'leftKeyUp':
                this.pressingLeftKey = false;
                break;
            case 'rightKeyUp':
                this.pressingRightKey = false;
                break;
        } 
    }

    startGame() {
        this.loop(0)
    }

    loop(timestamp) {
        this.runLogic(timestamp);
        this.draw();
        this.counter += 1;
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

    runLogic(timestamp) {        
        
        const acceleration = 0.005;
        const startingSpeed = 0.1;

        if (this.pressingLeftKey) {
            if (!this.ship.speed) this.ship.speed = -1 * startingSpeed;
            this.ship.speed *= 1 + acceleration;
        } else if (this.pressingRightKey) {
            if (!this.ship.speed) this.ship.speed = startingSpeed;
            this.ship.speed *= 1 + acceleration;
        } else {
            this.ship.speed = 0;
        }
        this.ship.speed = Math.min(this.ship.speed, 3);
        console.log(this.ship.angle + this.ship.speed);
        this.ship.angle = (Math.PI * 2 + this.ship.angle + this.ship.speed) % (Math.PI * 2);

        
        if (this.counter % this.waveFrequency === 0) {
            this.waves.push(new Wave(this))
        }

        if (this.timer < timestamp - this.SPEED) {
            this.waveSpeed += 0.25
            this.waveFrequency -= 1
            this.timer = timestamp
        }

        this.waves.map(waveObject => waveObject.radiusDecrease())
        this.waves.map(waveObject => waveObject.waveRemover())
        this.collisionDetect();
        this.hole.turn()

    }

    clear() {
        this.ctx.clearRect(0, 0, 1260, 570)

    }

    draw() {
        this.clear();
        this.ship.drawShip();
        this.hole.drawCentre();
        this.waves.map(waveObject => waveObject.drawWaves());
        this.waveCounter.survivedWaves();
        this.waveCounter.lives();

    }

    collisionDetect() {

        for (let waveObject of this.waves) {
            if (waveObject.waveRadius > 70 && waveObject.waveRadius < 100) {
                const angle = (this.ship.angle + Math.PI) % (Math.PI * 2);
                const start = (waveObject.startRadian + Math.PI / 2) % (Math.PI * 2);
                const end = (waveObject.endRadian + Math.PI / 2) % (Math.PI * 2);
                console.log(start, angle, end)
                if (!(angle > start && angle < end)) {
                    this.waveCounter.shield--;
                    if (this.waveCounter.shield === 0) {
                    window.location.href = "./game-over.html"
                    window.confirm(`You survived ${this.waveCounter.score} waves`)
                
                    }
                }
            }
        }
    }
}