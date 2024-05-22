const maze = document.getElementById("maze");

maze.style = `
    display:  grid;
    grid-template-columns: repeat(${numbersOfCell}, auto [col-start]);
    grid-template-rows: repeat(${numbersOfCell}, auto [col-start]);
    border: 5px solid blue;
`;

for (let i = 0; i < numbersOfCell; i++) {
    for (let j = 0; j < numbersOfCell; j++) {
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


//const mazePlan = new Array(numbersOfCell).fill(0).map(() => new Array(numbersOfCell).fill(0));
// for (let i = 0; i < numbersOfCell; i++) {
//     for (let j = 0; j < numbersOfCell; j++) {
//         mazePlan[i][j] = Math.random() < 0.5 ? 0 : 1;
//     }
// }
// mazePlan[0][0] = 1;


//example array
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


for (let i = 0; i < numbersOfCell; i++) {
    for (let j = 0; j < numbersOfCell; j++) {
        if (mazePlan[i][j] == 0) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            cell.style.backgroundColor = "black";
        }
    }
}

const startCell = document.getElementById(`cell-0-0`);
startCell.style.backgroundColor = "purple";

const endCell = document.getElementById(`cell-${numbersOfCell-1}-${numbersOfCell-1}`);
endCell.style.backgroundColor = "green";

function setColor(i, j, color){
    const cell = document.getElementById(`cell-${i}-${j}`);
    cell.style.backgroundColor = color;
}


document.getElementById("startBtn").addEventListener('click', () => traverseGraph());






