const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function generateFibNumbers(n){
    let startBtn = document.getElementById("startBtn");
    startBtn.style.backgroundColor = "grey";
    startBtn.style.color = "black";

    startBtn.removeEventListener("click", startFibSeries)
    let arr = [0, 1]
    let position = 2;

    while(position <= n){
        let prev1 = arr.length-2;
        let prev2 = arr.length-1;

        let prev1Bar = document.getElementById(`bar${prev1}`);
        let prev2Bar = document.getElementById(`bar${prev2}`);

        await sleep(250);

        prev1Bar.style.backgroundColor = "orange";
        prev2Bar.style.backgroundColor = "orange";

        let newNum = arr[prev1] + arr[prev2];
        arr.push(newNum);

        let newBar = document.createElement('div');
        newBar.className = "bar";
        newBar.id = `bar${arr.length-1}`;
        newBar.style.height = `${newNum+1}px`;
        newBar.style.backgroundColor = "pink";

        await sleep(250);
        
        let mainDiv = document.getElementById("fibbars");
        mainDiv.appendChild(newBar);

        await sleep(500);

        prev1Bar.style.backgroundColor = "lightblue";
        prev2Bar.style.backgroundColor = "lightblue";


        prev1 = prev2;
        prev2 = newNum;

        position++;
    }

    await sleep(250);

    let lastBar = document.getElementById(`bar${arr.length-1}`);
    lastBar.style.backgroundColor = "lightblue"
}