const numbersOfCell = 16;
let isVisited = new Array(numbersOfCell).fill(0);
let path = [];

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}


const isValid = (i,j,numbersOfCell, mazePlan)=>{
    if(i<0 || j<0 || i>=numbersOfCell || j>= numbersOfCell || mazePlan[i][j] == 0){
        return false;
    }
    return true;
}

async function dfs(i, j){
   
    if(i == (numbersOfCell-1) && j == (numbersOfCell-1)){
        path.push([numbersOfCell-1, numbersOfCell-1]);
        return true;
    }

    await sleep(100);

    mazePlan[i][j] = 0;
    setColor(i, j, "pink");

    //up
    if(isValid(i-1,j,numbersOfCell,mazePlan) && await dfs(i-1, j)){
        path.push([i,j]);
        return true;
    }

    //down
    if(isValid(i+1,j,numbersOfCell,mazePlan) && await dfs(i+1, j)){
        path.push([i,j]);
        return true;
    }

    //left
    if(isValid(i,j-1,numbersOfCell,mazePlan) && await dfs(i, j-1)){
        path.push([i,j]);
        return true;
    }

    //right
    if(isValid(i,j+1,numbersOfCell,mazePlan) && await dfs(i, j+1)){
        path.push([i,j]);
        return true;
    }

    setColor(i, j, "white");

    return false;
}

const bfsParents = Array.from({length: 16}, () => Array(16));

async function bfs(){
    let queue = [[0,0]];
    mazePlan[0][0] = 0;

    while(queue.length){
        const [i, j] = queue.shift();


        if(i == 15 && j == 15) return;

        await sleep(100);

        setColor(i, j, "pink");


        //up
        if(isValid(i-1, j, numbersOfCell, mazePlan)){
            mazePlan[i][j] = 0;
            queue.push([i-1,j]);
            bfsParents[i-1][j] = [i,j];
        }
        //down
        if(isValid(i+1, j, numbersOfCell, mazePlan)){
            mazePlan[i][j] = 0;
            queue.push([i+1,j]);
            bfsParents[i+1][j] = [i,j];
        }
        //right
        if(isValid(i, j+1, numbersOfCell, mazePlan)){
            mazePlan[i][j] = 0;
            queue.push([i,j+1]);
            bfsParents[i][j+1] = [i,j];
        }
        //left
        if(isValid(i, j-1, numbersOfCell, mazePlan)){
            mazePlan[i][j] = 0;
            queue.push([i,j-1]);
            bfsParents[i][j-1] = [i,j];
        }
    }
}


async function traverseDfs(){
    if(await dfs(0, 0)){
        while(path.length > 0){
            await sleep(100);
            let [i, j] = path.pop();
            setColor(i, j, "yellow");
        }
    }
}

async function traverseBfs(){
    await bfs();
    let i=15; 
    let j=15;

    const bfsPath = [[15, 15]];

    while(i && j){
        const [iParent, jParent] = bfsParents[i][j];
        bfsPath.push([iParent, jParent]);
        i = iParent;
        j = jParent;
    }

    bfsPath.push([0, 0]);

    while(bfsPath.length){
        await sleep(100);
        let [i, j] = bfsPath.pop();
        setColor(i, j, "yellow");
    }
}