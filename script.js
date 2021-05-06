const gridContainer = document.querySelector ("#grid-container");
const root = document.documentElement;
let userChoice = 16
root.style.setProperty('--width', (userChoice)+"px")
for(let j = 0; j<userChoice;j++){
    const rowOfCells = document.createElement ("div");
    rowOfCells.classList.add("row");
    for( let i = 0; i<userChoice; i++) {
        const singleCell = document.createElement ("div");
        singleCell.innerHTML = "&nbsp;";
        singleCell.style.color = "gray";
        singleCell.classList.add ("cell") 
        singleCell.addEventListener ("mouseover" , () => {
            singleCell.style.backgroundColor = "purple";
        });
        rowOfCells.appendChild (singleCell);
    }
    gridContainer.appendChild(rowOfCells)
}












