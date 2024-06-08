
const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    for (j = 0; j < i; j++){
        const squareDiv = document.createElement("div");
        squareDiv.textContent = "HI";
        squareDiv.classList.add("squareDiv");
        container.appendChild(squareDiv);
    }
}

