class Player {
    constructor() {
        this.score = 0;
        this.gravity = 0.5;
        this.velocity = 0;
        this.width = 160;
        this.height = 200;
        this.x = 50;
        this.y = this.height - height;
    }
    jump() {
        if (this.y < 0){
            return;
        }
        this.velocity = - 13;
    }
    draw() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        console.log(this.y);
        //
        if (this.y >= height - this.height) {
            this.y = height - this.height;
            console.log(this.y);
        }

        //set image
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }
}