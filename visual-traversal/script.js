const maze = document.getElementById("maze");

maze.style = `
    display:  grid;
    grid-template-columns: repeat(16, auto [col-start]);
    grid-template-rows: repeat(16, auto [col-start]);
    border: 5px solid blue;
`;
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.id = `cell-${i}-${j}`;
        cell.style = `
            grid-column-start: ${j + 1};
            grid-column-end: ${j + 2};
            grid-row-start: ${i + 1};
            grid-row-end: ${i + 2};
            border: red solid 1px;
        `;

        maze.appendChild(cell);
    }
}




const mazePlan = [
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];



for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        if (mazePlan[i][j] == 0) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            cell.style.backgroundColor = "black";
        }
    }
}

const startCell = document.getElementById(`cell-0-0`);
startCell.style.backgroundColor = "purple";

const endCell = document.getElementById(`cell-15-15`);
endCell.style.backgroundColor = "green";

function setColor(i, j, color){
    const cell = document.getElementById(`cell-${i}-${j}`);
    cell.style.backgroundColor = color;
}


document.getElementById("startBtn").addEventListener('click', () => traverseGraph());






