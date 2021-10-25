const game = document.getElementById('canvas')



function startGame(){
    game.start()
}

// game.setAttribute('width', getComputedStyle(game)['width'])
// game.setAttribute('height', getComputedStyle(game)['height'])

// // 2d context allows drawing on top of canvas
const ctx = game.getContext('2d')

class Shopping{
    constructor(x, y, color, width, height){
        this.x = x
        this.y = y
        this.color = color
        this.height = height
        this.width = width
        this.alive = true
    }
    render = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

// function Shopping(x, y, color, width, height){
//     this.x = x 
//     this.y = y
//     this.color = color
//     this.width = width
//     this.height = height
//     this.alive - true
//     this.render = function(){
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }
//create parts on canvas then render them
let cart = new Shopping(115, 100, 'lightgrey', 70, 40)
let apple = new Shopping(20, 1, 'red', 20, 20)
let watermelon = new Shopping(60, 1, 'green', 40, 20)
let orange = new Shopping(120, 1, 'orange', 20, 20)
let eggplant = new Shopping(160, 1, 'purple', 40, 20)
let coconut = new Shopping(220, 1, 'brown', 20, 20)
let lemon = new Shopping(260, 1, 'yellow', 20, 20)

// console.log("this is the player", cart)
cart.render()
apple.render()
watermelon.render()
orange.render()
eggplant.render()
coconut.render()
lemon.render()
// function playersToFront(){
//     myGameArea.clear()
// }