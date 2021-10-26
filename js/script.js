const game = document.getElementById('canvas')

//movement tracker allows items to move
const moveDisplay = document.getElementById('movement')


function startGame(){
    game.start()
}

// game.setAttribute('width', getComputedStyle(game)['width'])
// game.setAttribute('height', getComputedStyle(game)['height'])

// // 2d context allows drawing on top of canvas
const ctx = game.getContext('2d')
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

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
        if (this.alive === true){
            ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        }
        // else{
        //     console.log("maybe nothing")
        // }
        
    }
//     remove = function(){
//         ctx.clearRect(0, 0, this.width, this.height)
//         console.log("remove called!!")
//     }
}

// function Shopping(x, y, color, width, height){
//     this.x = x 
//     this.y = y
//     this.color = color
//     this.width = width
//     this.height = height
//     this.alive - true
//     this.render = function (){
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

// cart.render()
// apple.render()
// watermelon.render()
// orange.render()
// eggplant.render()
// coconut.render()
// lemon.render()

const movementHandler = (e) => {
    switch (e.keyCode) { 
        //keycode 38 is the up arrow moves cart up
        case (38):
            cart.y -= 10
            if (cart.y <= 0) {
                cart.y = 0
            }
            break
        //moves cart left
        case (37):
            cart.x -= 10 
            if (cart.x < 0) {
                cart.x = 0 
            }
            break
        //  moves cart down
        case (40):
            cart.y += 10
            if (cart.y + cart.height >= game.height){
                cart.y = game.height - cart.height
            }
            break
        // moves cart right
        case (39):
            cart.x += 10
            if (cart.x + cart.width >= game.width){
                cart.x = game.width - cart.width
            }
            break
    }
    detectHit()

}

const gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    if (cart.alive) {
        cart.render()
        apple.render()
        watermelon.render()
        orange.render()
        eggplant.render()
        coconut.render()
        lemon.render()

    }
   
}
const detectHit = () => {
    if (
        cart.x < apple.x + apple.width &&
        cart.x + cart.width > apple.x && 
        cart.y < apple.y + apple.height &&
        cart.y + cart.height >= apple.y
    ){
        apple.alive = false
        // apple.remove()
        console.log("Collision Detected")
    }
} 
//create array of fruits
//iterate over fruits in detect hit





let stop = () => {clearInterval(gameInterval)}

document.addEventListener('keydown', movementHandler)

let gameInterval = setInterval(gameLoop, 70)

//collision detection btwn cart and fruits.
// function collisionDetection() {

// }
// const detectHit = (thing) => {
//     if (cart.x < thing.x + thing.width &&
//         cart.x + cart.width > thing.x &&
//         cart.y < thing.y + thing.height &&
//         cart.y + thing.height > thing.y
// )}
 