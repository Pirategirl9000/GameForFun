class Disp {
    /**
     * Gets reference to canvas named 'display'
     */
    constructor() {
        this.element = document.getElementById("display");
        this.ctx = document.getElementById("display").getContext('2d');
        this.WIDTH = 1280;
        this.HEIGHT = 720;
        this.cls(); //sets background
    }

    /**
     * Clears Canvas
     */
    cls() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        this.ctx.fill();
        this.ctx.closePath();
    }
} var disp = new Disp();

class Ground {
    constructor() {
        this.x = 0;
        this.y = 600;
        this.HEIGHT = 120;
        this.WIDTH = disp.WIDTH;
    }

    /**
     * Checks collision with object
     * @param {int} y 
     * @param {int} height 
     * @returns {bool}
     */
    checkCollide(y, height) {
        if (y + height >= this.y) {
            return true;
        }

    }

    /**
     * Draws ground to ctx
     */
    update() {
        disp.ctx.beginPath();
        disp.ctx.fillStyle = 'green';
        disp.ctx.fillRect(this.x, this.y, this.WIDTH, this.HEIGHT);
        disp.ctx.fill();
        disp.ctx.closePath();
    }
} var ground = new Ground();

class Player {
    /**
     * Creates a new instance of player
     */
    constructor() {
        this.x = disp.WIDTH/2;
        this.y = 100;
        this.left = 0;
        this.right = 0;
        this.speed = 3;
        this.WIDTH = 20;
        this.HEIGHT = 20;
        this.yVel = 5
    }

    /**
     * Moves the player
     */
    #move() {
        //Horizontal Movement

        if (this.x < -20) {
            this.x = disp.WIDTH;
        } else if (this.x > disp.WIDTH + 20) {
            this.x = 0;
        }
        this.x += this.left * this.speed + this.right * this.speed;


        //Vertical Movement
        if (ground.checkCollide(this.y, this.HEIGHT) && this.yVel > 0) {
            this.y = ground.y - this.HEIGHT;
            this.yVel = 0;
        } else {
            if (this.yVel >= 5) {
                this.yVel = 5;
            } else {
                this.yVel += 0.3;
            }
        }

        this.y += this.yVel;
    }

    /**
     * Draws player object
     */
    #draw() {
        disp.ctx.beginPath();
        disp.ctx.fillStyle = 'red';
        disp.ctx.fillRect(this.x, this.y, this.WIDTH, this.HEIGHT);
        disp.ctx.fill();
        disp.ctx.closePath();
    }

    /**
     * Updates the players position and draws the player to ctx
     */
    update() {
        this.#move();
        this.#draw();
    }

    jump() {
        if (this.y + this.HEIGHT == ground.y) {
            this.yVel = -10;
        }
    }

} var player = new Player();



document.addEventListener('keydown', (e) => {

    if (e.code == 'KeyF') {
        disp.element.requestFullscreen();
    }

    if (e.code == 'KeyD') {
        player.right = 1;
    } else if (e.code == 'KeyA') {
        player.left = -1;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code == 'KeyD') {
        player.right = 0;
    } else if (e.code == 'KeyA') {
        player.left = 0;
    }
});

<<<<<<< HEAD
document.addEventListener('keypress', (e) => {
    if (e.code == 'Space') {
        player.jump();
    }
})
=======
let jumpHandler = new Worker('jumpHandler.js');
jumpHandler.postMessage("init");

>>>>>>> refs/remotes/origin/main

let alive = setInterval( () => {
    disp.cls();
    ground.update();
    player.update();
}, 17);