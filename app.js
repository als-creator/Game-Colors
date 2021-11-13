const board = document.querySelector("#board")
const colors = [`#996633`,`#FF00CC`, `663366`, `0000FF`, `#FF3300`, `#66FFFF`, `#CCCCFF`, `#CC33FF`, `#FFFF66`]
const SQUARES_NUMBER = 500

for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement ("div")
    square.classList.add(`square`)

    square.addEventListener(`mouseover`, () => setColor(square))
    
    square.addEventListener(`mouseleave`, () => removeColor(square))

    board.append(square)
}



function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    
}

function removeColor(element) {
    element.style.backgroundColor = `rgb(8, 143, 80)`
    element.style.boxShadow = `0 0 2px #000`
    
}

function getRandomColor() {
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
