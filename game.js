class Game {
    constructor() {
        this.backgroundImages;
        this.coinImage;
    }
    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
    }
    preload() {
        this.backgroundImages = [
            // { src: loadImage('assets/background-0.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background-1.png'), x: 0, speed: 2 },
            // { src: loadImage('assets/background-2.png'), x: 0, speed: 3 }
        ];
        this.playerImage = loadImage('assets/player.png');
            
        this.coinImage = [
            loadImage('assets/coin-1.jpg'),
            loadImage('assets/coin-2.jpg')
        ];
    }
    draw() {
        clear();
        this.background.draw();
        this.player.draw();
        
        if (frameCount % 200 === 0) {
            this.obstacles.push(new Obstacle(this.coinImage[0]));
        }
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw();
        });
        this.obstacles = this.obstacles.filter((obstacle) => {
            if (obstacle.collision(this.player) || obstacle.x < 0) {
                return false;
            } else {
                return true;
            }
        });
    }
}