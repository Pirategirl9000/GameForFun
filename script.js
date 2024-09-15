class Disp {
    constructor() {
        this.element = document.getElementById("display");
        this.ctx = document.getElementById("display").getContext('2d');
        this.WIDTH = 1280;
        this.HEIGHT = 720;
        this.cls();
    }

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
    constructor() {
        this.x = disp.WIDTH/2;
        this.y = 100;
        this.dirX = 0;
        this.speed = 3;
        
    }

    update() {
        if (this.x < -20) {
            this.x = disp.WIDTH;
        } else if (this.x > disp.WIDTH + 20) {
            this.x = 0;
        }
        this.x += this.dirX * this.speed;
        //this.y += 

        this.draw();
    }

    draw() {
        disp.ctx.beginPath();
        disp.ctx.fillStyle = 'red';
        disp.ctx.fillRect(this.x, this.y, 20, 20);
        disp.ctx.fill();
        disp.ctx.closePath();
    }


}

player = new Player();



let alive = setInterval( () => {
    disp.cls();
    player.update();

}, 17);






document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyF') {
        disp.element.requestFullscreen()
    }

    if (e.code == 'KeyD') {
        player.dirX = 1;
    } else if (e.code == 'KeyA') {
        player.dirX = -1;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code == 'KeyD' || e.code == 'KeyA') {
        player.dirX = 0;
    }
});