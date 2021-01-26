class Game {
    constructor() {
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
        this.coins = [];
    }

    preload() {
        this.preloadPlayer();
        this.preloadForest();
        this.preloadBurningForest();
        this.preloadCity();
    }

    preloadPlayer(){
        this.playerImage = loadImage('assets/player.png');
    }

    preloadForest() {
        this.forestBackgroundImage =
            { src: loadImage('assets/background-0.png'), x: 0, speed: 2 }
        ;
    }

    preloadBurningForest() {
        this.bunrningForestBackgroundImage  =
            { src: loadImage('assets/background-1.png'), x: 0, speed: 4 }
        ;

        this.burningForestObstacle = loadImage('assets/fire.gif');
        this.burningForestCoin = loadImage('assets/koala.png');
    }

    preloadCity(){
        this.cityBackgroundImage  =
            { src: loadImage('assets/background-2.png'), x: 0, speed: 6 }
        ;

        this.cityObstacle = loadImage('assets/virus.png');
        this.cityCoin = loadImage('assets/mask.png');
    }

    draw() {
        clear();

        if (frameCount < 1000){
            this.drawForest();
        }
        
        if (frameCount > 1000 && frameCount < 4000){
            this.drawBurningForest();
        }
        
        if (frameCount > 4000) {
            this.drawCity();
        }
        this.player.draw();
        this.drawCoins();
        this.drawObstacles();
    }

    drawForest(){
        this.background.draw(this.forestBackgroundImage);
    }

    drawBurningForest(){
        this.background.draw(this.bunrningForestBackgroundImage);

        if (frameCount % 400 === 0) {
            this.coins.push(new Coin(this.burningForestCoin));
            this.obstacles.push(new Obstacle(this.burningForestObstacle));
        }
    }

    drawCity(){
        this.background.draw(this.cityBackgroundImage);

        if (frameCount % 400 === 0) {
            this.coins.push(new Coin(this.cityCoin));
            this.obstacles.push(new Obstacle(this.cityObstacle));
        }
    }

    drawCoins(){
        this.coins.forEach(function (coin) {
            coin.draw();
        });
        this.coins = this.coins.filter((coin) => {
            if (coin.collision(this.player) || coin.x < 0) {
                return false;
            } else {
                return true;
            }
        });
    }

    drawObstacles(){
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