class Coin {
    constructor(image) {
        this.image = image;
        this.x = (Math.random() * width) / 2;
        this.y = (Math.random() * height) / 1.5;
        this.width = 80;
        this.height = 80;
    }

    collision(playerInfo) {
        let coinX = this.x + this.width / 2;
        let coinY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        if (dist(coinX, coinY, playerX, playerY) > 25) {
            return false;
        } else {
            game.player.score += 5;

            document.getElementById('coinSound').play();
            return true;
        }
    }
    
    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}