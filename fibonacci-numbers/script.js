let bar0 = document.getElementById("bar0");
bar0.style.height = "1px";


let bar1 = document.getElementById("bar1");
bar1.style.height = "2px";

let startBtn = document.getElementById("startBtn");

let startFibSeries = () => {
    generateFibNumbers(15);
}

startBtn.addEventListener("click", startFibSeries);
