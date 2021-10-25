const game = document.getElementById('canvas')

const moveDisplay = document.getElementById('movement')

function startGame(){
    myGameArea.start()
}

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

// 2d context allows drawing on top of canvas
const ctx = game.getContext('2d')

function Shopping(x, y, color, width, height){
    this.x = x 
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive - true
    this.render = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let cart = new Shopping(200, 50, 'black', 32, 48)
console.log("this is the player", cart)

function playersToFront(){
    myGameArea.clear()
}