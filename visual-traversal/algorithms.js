let isVisited = new Array(16).fill(0);

let path = [];

const sleep = (time) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}



async function dfs(i, j){
    if(i<0 || j<0 || i>=16 || j>= 16 || mazePlan[i][j] == 0){
        return false;
    }

    if(i == 15 && j == 15){
        path.push([15, 15]);
        return true;
    }

    await sleep(100);

    mazePlan[i][j] = 0;
    setColor(i, j, "blue");

    //up
    if(await dfs(i-1, j)){
        // setColor(i, j, "green");
        path.push([i,j]);
        return true;
    }

    //down
    if(await dfs(i+1, j)){
        // setColor(i, j, "green");
        path.push([i,j]);
        return true;
    }

    //left
    if(await dfs(i, j-1)){
        // setColor(i, j, "green");
        path.push([i,j]);
        return true;
    }

    //right
    if(await dfs(i, j+1)){
        // setColor(i, j, "green");
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