document.addEventListener("DOMContentLoaded", function () {
    createBox(32);
})

function createBox(size) {
    const board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat (${size} , 1fr)`
    board.style.gridTemplateRows = `repeat (${size} , 1fr)`
    let numDiv = size * size

    for (let i = 0; i < numDiv; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'yellow'
        board.insertAdjacentElement("beforeend", div);
    }
}

function color () {
    board.addEventListener("mouseover", function(){
        div.style.backgroundColor = 'black'
    })
}


