class Game {
    constructor() {

    }
    setup() {
        this.player = new Player();
        this.background = new Background();
        this.scoreLabel = '';
        this.obstacles = [];
        this.coins = [];
    }

    preload() {
        this.preloadPlayer();
        this.preloadForest();
        this.preloadBurningForest();
        this.preloadCity();
        this.preloadSupermarket();
        this.preloadBLM();
        this.preloadHouse();
    }

    preloadPlayer(){
        this.playerImage = loadImage('./assets/player.png');
    }

    preloadForest() {
        this.forestBackgroundImage =
            { src: loadImage('./assets/background-0.png'), x: 0, speed: 2 }
        ;
    }

    preloadBurningForest() {
        this.bunrningForestBackgroundImage  =
            { src: loadImage('./assets/background-1.png'), x: 0, speed: 4 }
        ;

        this.burningForestObstacle = loadImage('./assets/fire.gif');
        this.burningForestObstacle2 = loadImage('./assets/log.png');
        this.burningForestCoin = loadImage('./assets/koala.png');
    }

    preloadCity(){
        this.cityBackgroundImage  =
            { src: loadImage('./assets/background-2.png'), x: 0, speed: 8 }
        ;

        this.cityObstacle = loadImage('./assets/virus.png');
        this.cityCoin = loadImage('./assets/mask.png');
    }

    preloadSupermarket(){
        this.supermarketBackgroundImage  =
            { src: loadImage('./assets/background-3.png'), x: 0, speed: 10 }
        ;

        this.supermarketCoin = loadImage('./assets/toilet paper.png');
    }

    preloadBLM(){
        this.blmBackgroundImage  =
            { src: loadImage('./assets/background-4.png'), x: 0, speed: 10 }
        ;
    }

    preloadHouse(){
        this.houseBackgroundImage  =
            { src: loadImage('./assets/background-5.jpg'), x: 0, speed: 4 }
        ;
    }

    draw() {
        clear();

        if (frameCount < 1000){
            this.drawForest();
        }
        
        if (frameCount > 1000 && frameCount < 3000){
            this.drawBurningForest();
        }
        
        if (frameCount > 3000 && frameCount < 6000) {
            this.drawCity();
        }

        if (frameCount > 6000 && frameCount < 9000) {
            this.drawSupermarket();
        }

        if (frameCount > 9000 && frameCount < 12000) {
            this.drawBLM();
        }

        if (frameCount > 12000) {
            this.drawHouse();
        }

        this.player.draw();
        this.drawCoins();
        this.drawObstacles();
        this.drawScore();
    }

    drawForest(){
        this.background.draw(this.forestBackgroundImage);
    }

    drawBurningForest(){
        this.background.draw(this.bunrningForestBackgroundImage);

        if (frameCount % 200 === 0) {
            this.coins.push(new Coin(this.burningForestCoin));
        }
        if (frameCount % 220 === 0) {
            this.obstacles.push(new LowObstacle(this.burningForestObstacle));
            this.obstacles.push(new LowObstacle(this.burningForestObstacle2));
        }
    }

    drawCity(){
        this.background.draw(this.cityBackgroundImage);

        if (frameCount % 400 === 0) {
            this.coins.push(new Coin(this.cityCoin));
        }
        if (frameCount % 200 === 0) {
            this.obstacles.push(new Obstacle(this.cityObstacle));
        }
    }

    drawSupermarket(){
        this.background.draw(this.supermarketBackgroundImage);

        if (frameCount % 420 === 0) {
            this.coins.push(new Coin(this.supermarketCoin));
        }
        if (frameCount % 150 === 0) {
            this.obstacles.push(new Obstacle(this.cityObstacle));
            this.obstacles.push(new LowObstacle(this.cityObstacle));
            this.obstacles.push(new Obstacle(this.cityObstacle));
            this.obstacles.push(new LowObstacle(this.cityObstacle));
        }
    }

    drawBLM(){
        this.background.draw(this.blmBackgroundImage);

        if (frameCount % 420 === 0) {
            this.coins.push(new Coin(this.cityCoin));
        }
        if (frameCount % 150 === 0) {
            this.obstacles.push(new Obstacle(this.cityObstacle));
            this.obstacles.push(new LowObstacle(this.cityObstacle));
            this.obstacles.push(new Obstacle(this.cityObstacle));
            this.obstacles.push(new LowObstacle(this.cityObstacle));
        }
    }

    drawHouse(){
        this.background.draw(this.houseBackgroundImage);
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

    drawScore(){

        if (this.player.score > 0) {
            document.querySelector('.score > h1').innerText = this.scoreLabel + `Score: ${this.player.score}`;
        } else if (this.player.score < 0) {
            document.querySelector('.score > h1').innerText = `2020 KILLED VIM :( refresh page to try again`;
            clear();
        }
    }

}