const linkedListContainer = document.getElementById("linked-list");
const arr = [1,2,3,4,5,6,7,8,9];

const listNode1 = {
    val: 1,
    next: null
}
const listNode2 = {
    val: 2,
    next: null
}
const listNode3 = {
    val: 3,
    next: null
}
const listNode4 = {
    val: 4,
    next: null
}
const listNode5 = {
    val: 5,
    next: null
}
const listNode6 = {
    val: 6,
    next: null
}
const listNode7 = {
    val: 7,
    next: null
}
const listNode8 = {
    val: 8,
    next: null
}
const listNode9 = {
    val: 9,
    next: null
}

listNode1.next = listNode2;
listNode2.next = listNode3;
listNode3.next = listNode4;
listNode4.next = listNode5;
listNode5.next = listNode6;
listNode6.next = listNode7;
listNode7.next = listNode8;
listNode8.next = listNode9;
listNode9.next = listNode5;



const linkedListHead = 1;

const fragement = document.createDocumentFragment();

arr.forEach((listNodeKey) => {
    const node = document.createElement('div');
    node.id = `list-node-${listNodeKey}`;
    node.className = "linked-list-node";
    node.innerHTML = `${listNodeKey}`;

    fragement.appendChild(node);

    const line = document.createElement('hr');
    line.className = "linked-list-line";
    fragement.appendChild(line)
})




linkedListContainer.appendChild(fragement);

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener('click', () => {
    detectCycle(listNode1);
})
