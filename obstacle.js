class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = (Math.random() * width) / 2;
        this.y = (Math.random() * height + 650) / 1.5;
        this.width = 95;
        this.height = 95;
    }
    collision(playerInfo) {
        //console.log('collision', playerInfo);
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            return false;
        } else {
            game.player.score -= 10;
            return true;
        }
    }
    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}