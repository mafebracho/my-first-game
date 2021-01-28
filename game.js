class Game {
    constructor() {

    }
    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
        this.coins = [];
        this.start = false;
    }

    preload() {
        this.preloadPlayer();
        this.preloadForest();
        this.preloadBurningForest();
        this.preloadCity();
        this.preloadSupermarket();
        this.preloadBLM();
        this.preloadHouse();
        this.preloadWin();
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
            { src: loadImage('./assets/background-5.png'), x: 0, speed: 0 }
        ;
    }
    preloadWin(){
        this.winImage = 
        { src: loadImage('./assets/win.gif'), x: 0, speed: 0 }
        ;
    }

    draw() {
        clear();

        if (frameCount < 300) {
            this.drawForest(100, 200);
        }
        
        if (frameCount > 300 && frameCount < 2000) {
            this.drawBurningForest(350, 500);
        }
        
        if (frameCount > 2000 && frameCount < 5000) {
            this.drawCity(2350, 2500);
        }

        if (frameCount > 5000 && frameCount < 8000) {
            this.drawSupermarket(5350, 5500);
        }

        if (frameCount > 8000 && frameCount < 11000) {
            this.drawBLM(8350, 8500);
        }

        if (frameCount > 11000 && frameCount < 11600) {
            this.drawHouse(11200, 11500);
        }

        if (frameCount > 11600 && frameCount < 11900) {
            this.drawWin(11600, 11900);
        }

        if (frameCount > 11900) {
            location.reload();
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
            if (Math.random() > 0.5){
                this.obstacles.push(new LowObstacle(this.burningForestObstacle));
             }else {
                this.obstacles.push(new LowObstacle(this.burningForestObstacle2));
             }
        }
    }

    drawCity(textSartFrame, textEndFrame){
        this.background.draw(this.cityBackgroundImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('🦠 Covid-19 arrived 🦠 - You need masks 😷');
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
            this.drawHeadline('Toilet paper - TOTAL PANIC! 🧻');
        }

        if (frameCount == textEndFrame){
            this.drawHeadline('');
        }

        if (frameCount % 400 === 0) {
            this.coins.push(new Coin(this.supermarketCoin));
        }
        if (frameCount % 150 === 0) {
            if (Math.random() > 0.5){
                this.obstacles.push(new LowObstacle(this.cityObstacle));
                this.obstacles.push(new Obstacle(this.cityObstacle));
             }else {
                this.obstacles.push(new Obstacle(this.cityObstacle));
             }
        }
    }

    drawBLM(textSartFrame, textEndFrame){
        this.background.draw(this.blmBackgroundImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('Protests everywhere, like the virus 🦠');
        }

        if (frameCount == textEndFrame){
            this.drawHeadline('');
        }

        if (frameCount % 420 === 0) {
            this.coins.push(new Coin(this.cityCoin));
        }
        if (frameCount % 150 === 0) {
            if (Math.random() > 0.5){
                this.obstacles.push(new Obstacle(this.cityObstacle));
                this.obstacles.push(new Obstacle(this.cityObstacle));
             }else {
                this.obstacles.push(new LowObstacle(this.cityObstacle));
             }
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

    drawWin(textSartFrame, textEndFrame){
        this.background.draw(this.winImage);

        if (frameCount == textSartFrame){
            this.drawHeadline('YOU HELPED VIM SURVIVE 2020!!!');
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
        let score = document.querySelector('#score > h4');
        if (this.player.score > 0) {
            score.innerText = `Score: ${this.player.score}`;
        } else if (this.player.score < 0) {
            this.endGame();
        }
    }

    endGame(){
        if(this.start == true){
            score.innerText = `2020 KILLED VIM :( refresh page to try again`;
            document.getElementById('gameOver').play();
            let audio = document.querySelector('#backgroundMusic');
            audio.pause();
            audio.currentTime = 0;
            this.start = false;
            clear();
        }
    }

    drawHeadline(text){
        document.querySelector('#headlines > h1').innerText = text;
    }

}
