class LowObstacle {
    constructor(image) {
        this.image = image;
        this.x = this.calculateX();
        this.y = this.calculateY();

        this.width = 100;
        this.height = 100;
    }

    calculateY(){
        let minPaddingTop = 500;
        let fullRange = 100;

        let ran = Math.random();
        let randomRange = ran * fullRange;
        return minPaddingTop + randomRange;
    }

    calculateX(){
        return width;
    }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            return false;
        } else {
            game.player.score -= 10;
            document.getElementById('obstacleSound').play();
            return true;
        }
    }
    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}