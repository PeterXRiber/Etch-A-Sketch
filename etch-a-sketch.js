
const container = document.querySelector("#container");
const myBtn = document.querySelector("#myBtn");





document.addEventListener("DOMContentLoaded", event => {
    let row = 16;
    let column = 16;
    for (i = 0; i < row; i++) {
        for (j = 0; j < column; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.textContent = "";
            squareDiv.classList.add("squareDiv");
            container.appendChild(squareDiv);
        }
    }
});

myBtn.addEventListener("click", event => {
let numberOfSquares = prompt("How many squares you want?", "");
let row = numberOfSquares;
let column = numberOfSquares;

for (i = 0; i < row; i++) {
    for (j = 0; j < column; j++) {
        let squareDiv = document.createElement("div");
        squareDiv.textContent = "";
        squareDiv.classList.add("squareDiv");
        container.appendChild(squareDiv);
    }
}

}); 


container.addEventListener("mousemove", event => {
    let log = document.querySelector("#log");
    log.textContent = `
    Screen X/Y: (${event.screenX}, ${event.screenY})`
});

container.addEventListener("mouseover", event => {
    event.target.style.background = "black";
});


container.addEventListener("click", event => {
    event.target.style.backgroundColor = "white";
});











