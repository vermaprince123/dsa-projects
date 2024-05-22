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
    setColor(i, j, "blue");

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


async function traverseGraph(){
    if(await dfs(0, 0)){
        while(path.length > 0){
            await sleep(100);
            let [i, j] = path.pop();
            setColor(i, j, "green");
        }
    }
}