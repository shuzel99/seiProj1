
const playGame = () => {
    startScreen.style.display = "none"
    playGameNow()
}

startButton.addEventListener("click", playGame)

// restartButton.addEventListener("click", location.reload())


let playGameNow = () => {
    

const game = document.getElementById('canvas')

//movement tracker allows items to move
const moveDisplay = document.getElementById('movement')
const message = document.getElementById('winnerOrLoser')

const ctx = game.getContext('2d')


// game.setAttribute('width', getComputedStyle(game)['width'])
// game.setAttribute('height', getComputedStyle(game)['height'])

// // 2d context allows drawing on top of canvas

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

let gameReload = () => {
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
        ctx.fillRect(this.x, this.y+=1, this.width, this.height)//, this.speed, this.direction)
        }
         return
    }
   
}
// shoppingCart = new Image();
// shoppingCart.onload = function(){
//     ctx.drawImage(shoppingCart, 135, 120, shoppingCart.width*.03, shoppingCart.height*.03)
// }
//   shoppingCart.src = 'https://i.postimg.cc/qRhzST6H/cartttt.png'
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
let cart = new Player(130, 130, 'lightgrey', 30, 20)
let apple = new Shopping(5, 1, 'Apple', 'red', 16, 16)
let watermelon = new Shopping(30, 1, 'Watermelon', 'green', 35, 25)
let orange = new Shopping(70, 1, 'Orange', '#ff5f00', 16, 16)
let eggplant = new Shopping(100, 1, 'Eggplant', 'purple', 30, 15)
let coconut = new Shopping(140, 1, 'Coconut', 'brown', 15, 15)
let lemon = new Shopping(170, 1,'Lemon', 'yellow', 16, 16)
let blueberry = new Shopping(200, 1,'Blueberry', '#5954a1', 10, 10)
let celery = new Shopping(220, 1,'Celery', '#9DCE5C', 10, 30)
let peach = new Shopping(240, 1,'Peach', '#FFC696', 16, 16)
let banana = new Shopping(270, 1,'Banana', '#FFE135', 10, 25)


fruitCollection = [apple, watermelon, orange, eggplant, coconut, lemon, blueberry, celery, peach, banana]

let currentItemIndex = Math.floor(Math.random()*fruitCollection.length)//generates random fruit 
currentItem.innerText = fruitCollection[currentItemIndex].name 
//  console.log(currentItemIndex)


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

 gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    if (cart.alive) {
        cart.render()
        apple.render()
        watermelon.render()
        orange.render()
        eggplant.render()
        coconut.render()
        lemon.render()
        blueberry.render()
        celery.render()
        peach.render()
        banana.render()
    }
}



let score = 0
const detectHit = () => {
    for (let i = 0; i < fruitCollection.length; i++)
  
    // console.log(fruitCollection[i])
    if  (
        cart.x < fruitCollection[i].x + fruitCollection[i].width &&
        cart.x + cart.width > fruitCollection[i].x && 
        cart.y < fruitCollection[i].y + fruitCollection[i].height &&
        cart.y + cart.height >= fruitCollection[i].y
    )
    {
        fruitCollection[i].alive = false
        let target = fruitCollection[currentItemIndex]
        let capture = fruitCollection.splice(i, 1, i) //removes items that have been collided with from canvas
        // console.log("collision detected")
        // console.log(capture)
      if(target === capture[0]){
            pointsUpdate.innerText =  ` ${score+=10}`
            message.innerText = "Good Job Shopper!"
            clearInterval(gameInterval)
      } else if(target === capture[1]) {
            pointsUpdate.innerText =  ` ${score+=5}`
      } else if (target !== capture) {
             pointsUpdate.innerText =  ` ${score-=5}`
             message.innerText = "You're Unemployed :("
             clearInterval(gameInterval)
      }
 }
}

document.addEventListener('keydown', movementHandler)
}
gameReload()

const gameInterval = setInterval(gameLoop, 70)
gameLoop()

restartButton.addEventListener("click", gameReload)
}



