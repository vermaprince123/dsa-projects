function generateNums(n){
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(Math.floor(Math.random()*100));
    }

    return arr;
}

function generateColors(n){
    let arr = [];
    let randomArray = ['A', 'B', 'C', 'D', 'E', 'F','0','1','2','3','4','5','6','7','8','9'];
    let x = randomArray.length;
    for(let i=0; i<n; i++){
        let str = "#"
        for(let i=0; i<6; i++){
            str +=  randomArray[Math.floor(Math.random()*x)];
        }
        arr.push(str);
    }

    return arr;
}

function getTimer(prefix){
    return setInterval(() => {
        const timerLabel = document.getElementById(prefix+"-timer");
        timerLabel.innerHTML = parseInt(timerLabel.innerHTML)+1;
    })
}