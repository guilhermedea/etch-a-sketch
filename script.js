let gridContainer = document.querySelector("#grid-container");
let gridNumber = document.querySelector("#gridNumber");
const generateButton = document.querySelector("#generate-button");

generateButton.addEventListener("click", () => {
    let number = Number(gridNumber.value);
    gridGenerator(number, number);
})


function randomRgba () {
    const randomValue = () => Math.floor(Math.random() * 256);
    let r = randomValue();
    let g = randomValue();
    let b = randomValue();

    return `rgba(${r}, ${g}, ${b}`;
}

function gridGenerator (rows, cols){

    gridContainer.innerHTML = "";

    const gridItemWidth = 95 / cols;
    const gridItemHeight = 100 / rows;

    for (let index = 0; index < rows; index++) {
        for (let index = 0; index < cols; index++) {
            let newGridItem = document.createElement("div");
            newGridItem.className = "grid-item";
            newGridItem.style.width = `${gridItemWidth}%`
            newGridItem.style.height = `${gridItemHeight}%`
            gridContainer.appendChild(newGridItem);    
        } 
    }

    let gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
          item.style.background = randomRgba();
          item.style.opacity = Number(item.style.opacity) + 0.1;
        });
      });
    }
