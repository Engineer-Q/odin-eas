let color = 'black';
let click = false;

document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);

    document.querySelector("body").addEventListener("click", (e)=>{
        if(e.target.tagName != "BUTTON"){
            click = !click
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "you are not allowed to draw"
            }else{
                draw.innerHTML = "you are allowed to draw"
            }
        }
    })
    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener("click", function () {
        let size = getSize()
        createBoard(size)
    })
})
console.log("HELLO")

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div)
    }


}


function getSize() {
    let input = prompt("type your size");

    let message = document.querySelector('#message');
    if (input == "") {
        message.innerHTML = 'please provide a number'
    } else if (input < 0 || input > 100) {
        message.innerHTML = 'provide a number between 1 and 100'
    } else {
        message.innerHTML = "now you can play"
        return input;
    }
}

function colorDiv() {
    if(click){
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = 'black'
        }
    }
    
}
function setColor(colorChoice) {
    color = colorChoice
}
setColor()

function setReset () {
    let divs = document.querySelectorAll("div")
    divs.forEach(div=>{
        div.style.backgroundColor = "white"
    })
}