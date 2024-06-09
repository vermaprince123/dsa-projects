
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}


const detectCycle = async (head) => {
    let slow = head;
    let fast = head;

    let prevSlow = document.getElementById(`list-node-${head.val}`);
    let prevFast = document.getElementById(`list-node-${head.val}`);
    prevSlow.style.backgroundColor = "bisque";



    do{
        await sleep(1000);
        slow = slow.next;
        prevSlow.style.backgroundColor = "white"
        prevSlow = document.getElementById(`list-node-${slow.val}`);
        prevSlow.style.backgroundColor = "lightblue";

        await sleep(1000);
        fast = fast.next.next;
        prevFast.style.backgroundColor = "white";
        prevFast = document.getElementById(`list-node-${fast.val}`);
        prevFast.style.backgroundColor = "pink";

    }while(slow != fast);


    slow = head;

    await sleep(1000);
    prevSlow = document.getElementById(`list-node-${head.val}`);
    prevSlow.style.backgroundColor = "lightblue";


    while(slow != fast){
        console.log(slow, fast);
        await sleep(1000);
        slow = slow.next;
        prevSlow.style.backgroundColor = "white"

        await sleep(1000);
        prevSlow = document.getElementById(`list-node-${slow.val}`);
        prevSlow.style.backgroundColor = "lightblue";

        await sleep(1000);
        fast = fast.next;
        prevFast.style.backgroundColor = "white";

        await sleep(1000);
        prevFast = document.getElementById(`list-node-${fast.val}`);
        prevFast.style.backgroundColor = "pink";
    }

    await sleep(400);
    prevFast.style.backgroundColor = "bisque"

    console.log(slow);
}