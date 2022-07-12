

createBoard(16)
let color = "black";
function createBoard(size) {

    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=>div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`; //creates n columns in the grid
    board.style.gridTemplateRows = `repeat(${size},1fr)`;    //creates n rows in the grid
    
    let totalAmount = size * size;
    for (let i = 0; i < totalAmount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener("mouseover", changeSquare);
        board.insertAdjacentElement("beforeend", square);
        square.classList.add("grid");
    }

    
    
}

let sizeButton  = document.querySelector(".size");
sizeButton.addEventListener("click", inputSize);

let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", reset);




function changeSize(input){
    if(input>=2 && input<=64){
        createBoard(input);
    }else{
        console.log("too many squares");
    }
};
function inputSize(){
    let size = prompt("Select Board Size: ");
    changeSize(size);
};


function reset() {
    const grids = document.querySelectorAll(".grid");
    
    grids.forEach((div) => {
        div.style.backgroundColor = "white";
    });
}

function changeSquare(){
    if(color ==='random'){
        this.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`  
    }else{
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}