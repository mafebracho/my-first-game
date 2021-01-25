class Player {
    constructor() {
        this.score = 0;
        this.gravity = 0.2;
        this.velocity = 0;
        this.width = 160;
        this.height = 200;
        this.x = 50;
        this.y = height - this.height;
    }
    jump() {
        this.velocity = - 13;
    }
    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= height - this.height) {
            this.y = height - this.height;
        }
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}