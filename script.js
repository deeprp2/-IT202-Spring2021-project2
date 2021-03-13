let playButton = document.getElementById('play-button')
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

const player = {
    positionX: 0,
    positionY: 0,
    height: 100,
    width: 100,
    move: function (key) {
        switch (key) {
            case 'ArrowUp': this.positionY = (this.positionY > 20) ? this.positionY - 10 : 10
        }
    }
}

const game = {
    score: 0,
    level: 0,
    lives: 5
}

window.onload = function () {
    showGameInstructions()

    // attach listener to start button
    let startButton = document.getElementById("play-button")
    startButton.addEventListener('click', startGame)
}

function startGame() {
    clear()
    draw()
}

function draw() {
    drawGameStats()
    drawPlayer()
    requestAnimationFrame(draw)
}

function drawPlayer() {
    let playerImg = new Image()
    playerImg.src = 'assets/images/monkey.png'
    player.positionX = 5
    player.positionY = 100
    playerImg.onload = function () {
        ctx.drawImage(playerImg, player.positionX, player.positionY, player.width, player.height)
    }
}

function drawGameStats() {
    ctx.beginPath()
    ctx.moveTo(0, canvas.height / 10)
    ctx.lineTo(canvas.width, canvas.height / 10)
    ctx.stroke()
    ctx.font="20px Arial";
    ctx.fillText(`level: ${game.level}`, canvas.width / 15, canvas.height / 15)
    ctx.fillText(`score: ${game.score}`, canvas.width / 2.3, canvas.height / 15)
    ctx.fillText(`lives: ${game.lives}`, canvas.width / 1.2, canvas.height / 15)
}

function showGameInstructions() {
    ctx.font="30px Georgia";
    ctx.fillText("Instructions", 250, 100)
    ctx.font="20px Georgia";
    ctx.fillText("1. Use arrow keys to move the monkey along the screen", 50, 150)
    ctx.fillText("2. Avoid hitting the stone", 50, 200)
    ctx.fillText("3. To score, collect the bananas", 50, 250)
    ctx.fillText("4. There are 10 levels in the game, each level with increase difficulty", 50, 300)
    ctx.fillText("5. Click the play button to start the game", 50, 350)
    playButton.style.display = 'unset'
}

// clear canvas
function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    playButton.style.display = 'none'
}
