const container = document.querySelector('#container');

var gridSize = 16;
//var gridUnit = "1 rem ";


/*function createGrid(gridSize) {
    var gridForm = gridUnit.repeat(gridSize);
    container.style.gridTemplateColumns = gridForm;
    container.style.gridTemplateRows = gridForm;*/

for (i = 0; i < gridSize * gridSize; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.background = 'white';
    container.appendChild(box);
    box.addEventListener('mouseenter', function black() { box.style.background = 'black' });
    //box.addEventListener('mouseleave', function white() { box.style.background = 'white' });

}

//}


/*function reset() {
    gridSize = prompt("How many rows and columns should your grid have ?");
    createGrid(gridSize);
}

const button = document.querySelector('#btn');

//button.addEventListener("click", reset)*/