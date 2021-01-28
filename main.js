const game = new Game();

function preload() {
    game.preload();
}
function setup() {
    createCanvas(700, 700);
    game.setup();
}
function draw() {
    if(game.start){
        game.draw();
    }   
}

function keyPressed () {
    //spacebar
    if (keyCode === 32) {
        this.playerJump();
    }

    //return button
    if (keyCode === 13){
        this.startGame()
    }
}

function startGame(){
    game.start = true;
    document.getElementById('splash').hidden = true;
    document.getElementById('score').hidden = false;
    document.getElementById('headlines').hidden = false;

    // document.getElementById('backgroundMusic').play();
}

function playerJump(){
    game.player.jump();
    // document.getElementById('jumpingSound').play();
}