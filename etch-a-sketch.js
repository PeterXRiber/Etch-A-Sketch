

document.addEventListener("DOMContentLoaded", function() {


    

    var container = document.querySelector("#container");
    

    let row = 16;
    let column = 16;


    for (i = 0; i < row; i++) {

        const squareDiv = document.createElement("div");
            squareDiv.textContent = "HI";
            squareDiv.classList.add("squareDiv");

            squareDiv.style.left = i * 100 + "px";
            
            

            container.appendChild(squareDiv);
        
        for (j = 0; j < column; j++) {
            
            const squareDiv = document.createElement("div");
            squareDiv.textContent = "HI";
            squareDiv.classList.add("squareDiv");

            
            squareDiv.style.left = j * 100 + "px";
            

            container.appendChild(squareDiv);
        }
    }


});







