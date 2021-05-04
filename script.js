const gridContainer = document.querySelector ("#grid-container");
let userChoice = 16
for(let j = 0; j<userChoice;j++){
    const rowOfCells = document.createElement ("div");
    rowOfCells.classList.add("row");
    for( let i = 0; i<userChoice; i++) {
        const singleCell = document.createElement ("div");
         singleCell.textContent = "hello";
         singleCell.style.color = "grey";
         singleCell.classList.add ("bg-black") 
         singleCell.addEventListener ("mouseover" , () => {
            singleCell.style.color = "blue";
        });
        rowOfCells.appendChild (singleCell);
    }
    gridContainer.appendChild(rowOfCells)
}


