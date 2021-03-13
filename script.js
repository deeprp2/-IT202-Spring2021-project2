// background image
const backgroundImageURL = 'assets/images/canvas-background.png'

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

window.onload = function () {
    setCanvasBackground()
    showGameInstructions()
}

function showGameInstructions() {
    ctx.font="30px Georgia";
    ctx.fillText("Instructions", 250, 100)
    ctx.font="20px Georgia";
    ctx.fillText("1. Use arrow keys to move the monkey along the screen", 50, 150)
    ctx.fillText("2. Avoid hitting the stone", 50, 200)
    ctx.fillText("3. To score, collect the bananas", 50, 250)
    ctx.fillText("4. There are 10 levels in the game, each level with increase difficulty", 50, 300)
    ctx.fillText("5. Click the start button to start the game", 50, 350)
}

// set background image of canvas
function setCanvasBackground () {
    let background = new Image()
    background.src = backgroundImageURL
    background.onload = function () {
        ctx.drawImage(background, 0, 0)
        showGameInstructions()
    }
}


// clear canvas
function clear(){
    ctx.clearRect(0,0,c.width,c.height);
}
