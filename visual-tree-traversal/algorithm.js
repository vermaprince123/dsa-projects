let inorderCount = 0;
let preorderCount = 0;
let postorderCount = 0;

let traversalStarted = false;

const inorderTraversal = async (node) => {
    const {left, right, element} = node;

    const domNode = document.getElementById(element);
    await sleep(500);

    domNode.style.backgroundColor = "lightgreen";

    left && await inorderTraversal(left);

    await sleep(500);
    domNode.style.backgroundColor = "pink";
    const cell = document.getElementById(`inorder-array-${inorderCount}`);
    inorderCount++;
    cell.innerHTML = element;

    right && await inorderTraversal(right);
}

const preorderTraversal = async (node) => {
    const {left, right, element} = node;

    const domNode = document.getElementById(element);
    await sleep(500);

    domNode.style.backgroundColor = "lightgreen";
    
    await sleep(500);
    domNode.style.backgroundColor = "pink";
    const cell = document.getElementById(`preorder-array-${preorderCount}`);
    preorderCount++;
    cell.innerHTML = element;

    left && await preorderTraversal(left);
    right && await preorderTraversal(right);
}

const postorderTraversal = async (node) => {
    const {left, right, element} = node;

    const domNode = document.getElementById(element);
    await sleep(500);

    domNode.style.backgroundColor = "lightgreen";

    left && await postorderTraversal(left);
    right && await postorderTraversal(right);

    await sleep(500);
    domNode.style.backgroundColor = "pink";
    const cell = document.getElementById(`postorder-array-${postorderCount}`);
    postorderCount++;
    cell.innerHTML = element
}