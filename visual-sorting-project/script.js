const nums = generateNums(10);
const colors = generateColors(10);

const sortingAlgos = [
    {
        prefix: "bubble",
        callback: bubbleSort,
        nums: [...nums]
    },
    {
        prefix: "insertion",
        callback: insetionSort,
        nums: [...nums]
    },
    {
        prefix: "selection",
        callback: selectionSort,
        nums: [...nums]
    },
    {
        prefix: "quick",
        callback: quickSort,
        nums: [...nums]
    },
    {
        prefix: "merge",
        callback: mergeSort,
        nums: [...nums]
    },

];

sortingAlgos.forEach((elem) => {
    const parentDiv = document.createElement('div');
    parentDiv.style = `
        width: 30%;
        height: 500px;
        border: solid black 1px;
        align-self: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: baseline;
        margin: 5px 10px 15px 10px
    `

    const prefix = elem.prefix;

    const topLabel = document.createElement('div');
    topLabel.style = `
        width: 100%;
        border-bottom: solid black 1px;
        display: flex;
        flex-disrection: row;
        justify-content: space-between;
        padding: 5px;
        font-size: 20px;
        font-weight: 600;
    `

    const title = document.createElement('p');
    const name = elem.prefix.toUpperCase() + " SORT";
    title.innerHTML = name;
    

    const timer = document.createElement('p');
    timer.id = prefix + "-timer";
    timer.innerHTML = "0";

    topLabel.appendChild(title);
    topLabel.appendChild(timer);
    
    parentDiv.appendChild(topLabel);


    
    elem.nums.forEach((elem, index) => {
        const bar =  document.createElement('div');
        bar.style.width = "40px";
        bar.style.height = (elem*4) + "px";
        bar.style.border = "solid black 1px";
        bar.style.backgroundColor = colors[index];
        bar.id = prefix + index
        parentDiv.appendChild(bar);
     });

    const mainDiv = document.getElementById("mainDiv");
    mainDiv.appendChild(parentDiv)

})




function swapHeights(i, j, prefix){
    const bari = document.getElementById(prefix+i);
    const barj = document.getElementById(prefix+j);

    const heighti = bari.style.height;
    const heightj = barj.style.height;

    const colori = bari.style.backgroundColor;
    const colorj = barj.style.backgroundColor;

    bari.style.height = heightj;
    barj.style.height = heighti;
    bari.style.backgroundColor = colorj;
    barj.style.backgroundColor = colori;
};

function getHeightandColor(index, prefix){
    const bar = document.getElementById(prefix+index);

    return {
        height: bar.style.height,
        color: bar.style.backgroundColor
    }
}

function setHeightandColor(index, height, color, prefix){
    const bar = document.getElementById(prefix + index);
    bar.style.height = height;
    bar.style.backgroundColor = color;
}

document.getElementById("startBtn").addEventListener("click", () => {
    sortingAlgos.forEach(elem => {
        elem.callback(elem.nums, swapHeights, elem.prefix)
    })
});