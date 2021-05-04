const gridContainer = document.querySelector ("#grid-container");

let rows = document.getElementsByClassName ("gridRow");
let cells = document.getElementsByClassName("cell");
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}
// let numOfTimes = 16;
// for( let numOfTimes= 0; i<numOfTimes; i++) {
// const singleCell = document.createElement ("div");
// singleCell.textContent = "hello";
// singleCell.style.color = "grey";
// singleCell.classList.add ("bg-black")


singleCell.addEventListener ("click" , () => {
    alert ("hello world");
});
gridContainer.appendChild (singleCell);

