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
}

var disp = new Disp();

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
    }

    /**
     * Updates the players position and draws the player to ctx
     */
    update() {
        this.move();
        this.draw();
    }

    /**
     * Moves the player
     */
    static move() {
        if (this.x < -20) {
            this.x = disp.WIDTH;
        } else if (this.x > disp.WIDTH + 20) {
            this.x = 0;
        }
        this.x += this.left * this.speed + this.right * this.speed;
    }

    /**
     * Draws player object
     */
    draw() {
        disp.ctx.beginPath();
        disp.ctx.fillStyle = 'red';
        disp.ctx.fillRect(this.x, this.y, 20, 20);
        disp.ctx.fill();
        disp.ctx.closePath();
    }


}

var player = new Player();

let alive = setInterval( () => {
    disp.cls();
    player.update();
}, 17);






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