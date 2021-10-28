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
    constructor(x, y, name, color, width, height){
        this.x = x //= Math.floor(Math.random() * game.width) generates random starting position
        this.y = y //= Math.floor(Math.random() * game.height)
        this.name = name
        this.color = color
        this.height = height
        this.width = width
        this.alive = true
        // this.speed = speed = Math.random() * (0.30 - 0.18) + 0.18
        // this.direction = direction = Math.random() < 0.5 ? -1 : 1
    }
    render = function(){
        if (this.alive === true){
            ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y+=.5, this.width, this.height)//, this.speed, this.direction)
        }
         return
    }
   
}

  
class Player{
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
}
}

//create parts on canvas then render them
let cart = new Player(115, 100, 'lightgrey', 70, 40)
let apple = new Shopping(20, 1, 'Apple', 'red', 20, 20)
let watermelon = new Shopping(60, 1, 'Watermelon', 'green', 40, 20)
let orange = new Shopping(120, 1, 'Orange', 'orange', 20, 20)
let eggplant = new Shopping(160, 1, 'Eggplant', 'purple', 40, 20)
let coconut = new Shopping(220, 1, 'Coconut', 'brown', 20, 20)
let lemon = new Shopping(260, 1,'Lemon', 'yellow', 20, 20)

fruitCollection = [apple, watermelon, orange, eggplant, coconut, lemon]

let currentItemIndex = Math.floor(Math.random()*fruitCollection.length)
currentItem.innerText = fruitCollection[currentItemIndex].name 

// function moveFruit(){
//     for(let i = 0; i < fruitCollection.length; i++){
//         ctx.fillStyle = this.color
//         ctx.fillRect(fruitCollection[i].x, fruitCollection[i].y+=.5, fruitCollection[i].w, fruitCollection[i].h)
//     }
// }
// moveFruit()

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
                cart.y = game.height - cart.height //confines movement to canvas boundaries
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

let score = 30 
const detectHit = () => {
    for (let i = 0; i < fruitCollection.length; i++)
  
    // console.log(fruitCollection[i])
    if  (
        cart.x < fruitCollection[i].x + fruitCollection[i].width &&
        cart.x + cart.width > fruitCollection[i].x && 
        cart.y < fruitCollection[i].y + fruitCollection[i].height &&
        cart.y + cart.height >= fruitCollection[i].y
    ){
        fruitCollection[i].alive = false
        pointsUpdate.innerText =  `${score+=10}`
        fruitCollection.splice(i, 1) //removes items that have been collided with from canvas
        console.log("Collision Detected")
        console.log(score)
    } 
    if (fruitCollection[i] === currentItemIndex) {
    console.log("thats a match") 
 }
}

 
     
 



//generate RANDOM fruit movement
//set up points system

//interpolate points into html via points variable in js
//grab random fruitCollection item
//check function 


// let stop = () => {clearInterval(gameInterval)}

document.addEventListener('keydown', movementHandler)

let gameInterval = setInterval(gameLoop, 70)

