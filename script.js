class Disp {
    constructor() {
        this.element = document.getElementById("display");
        this.ctx = document.getElementById("display").getContext('2d');
        this.WIDTH = 1280;
        this.HEIGHT = 720;
        this.cls();
    }

    cls() {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        ctx.fill();
        ctx.closePath();
    }
}

disp = Disp()



document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyF') {
        document.getElementById("display").requestFullscreen()
    }
})