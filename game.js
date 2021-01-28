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
            { src: loadImage('./assets/background-5.png'), x: 0, speed: 4 }
        ;
    }

    draw() {
        clear();

        if (frameCount < 1000){
            this.drawForest(100, 300);
        }
        
        if (frameCount > 1000 && frameCount < 3000){
            this.drawBurningForest(1100, 1300);
        }
        
        if (frameCount > 3000 && frameCount < 6000) {
            this.drawCity(3100, 3300);
        }

        if (frameCount > 6000 && frameCount < 9000) {
            this.drawSupermarket(6100, 6300);
        }

        if (frameCount > 9000 && frameCount < 12000) {
            this.drawBLM(9100, 9300);
        }

        if (frameCount > 12000) {
            this.drawHouse(12100, 12300);
        }

        this.player.draw();
        this.drawCoins();
        this.drawObstacles();
        this.drawScore();
    }

    drawForest(textSartFrame, textEndFrame){
        this.background.draw(this.forestBackgroundImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('January 2020');
        }

        if (frameCount == textEndFrame){
            this.drawHeadline('');
        }
    }

    drawBurningForest(textSartFrame, textEndFrame){
        this.background.draw(this.bunrningForestBackgroundImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('🔥 Australia 🔥 - Save the Koalas 🐨');
        }

        if (frameCount == textEndFrame){
            this.drawHeadline('');
        }

        if (frameCount % 200 === 0) {
            this.coins.push(new Coin(this.burningForestCoin));
        }
        if (frameCount % 220 === 0) {
            this.obstacles.push(new LowObstacle(this.burningForestObstacle));
            this.obstacles.push(new LowObstacle(this.burningForestObstacle2));
        }
    }

    drawCity(textSartFrame, textEndFrame){
        this.background.draw(this.cityBackgroundImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('🦠 Covid-19 arrived 🦠 - Wear masks 😷');
        }

        if (frameCount == textEndFrame){
            this.drawHeadline('');
        }

        if (frameCount % 400 === 0) {
            this.coins.push(new Coin(this.cityCoin));
        }
        if (frameCount % 200 === 0) {
            this.obstacles.push(new Obstacle(this.cityObstacle));
        }
    }

    drawSupermarket(textSartFrame, textEndFrame){
        this.background.draw(this.supermarketBackgroundImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('Apparently toilet paper is scarce 🧻');
        }

        if (frameCount == textEndFrame){
            this.drawHeadline('');
        }

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

    drawBLM(textSartFrame, textEndFrame){
        this.background.draw(this.blmBackgroundImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('Protests are everywhere, like the virus 🦠');
        }

        if (frameCount == textEndFrame){
            this.drawHeadline('');
        }

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

    drawHouse(textSartFrame, textEndFrame){
        this.background.draw(this.houseBackgroundImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('🔓 Lockdown 🔓');
        }

        if (frameCount == textEndFrame){
            this.drawHeadline('');
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

    drawScore(){
        if (this.player.score > 0) {
            document.querySelector('.score > h1').innerText = `Score: ${this.player.score}`;
        } else if (this.player.score < 0) {
            document.querySelector('.score > h1').innerText = `2020 KILLED VIM :( refresh page to try again`;
            clear();
        }
    }

    drawHeadline(text){
        document.querySelector('.headlines > h2').innerText = text;
    }

}