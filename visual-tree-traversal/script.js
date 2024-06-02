
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

const getTreeData = () => {
    return {
        element: '0',
        left: {
            element: '1',
            left: {
                element: '3',
            },
            right: {
                element: '4',
            },
        },
        right: {
            element: '2',
            left: {
                element: '5',
                left: {
                    element: '7',
                    left: {
                        element: '10',
                    },
                },
            },
            right: {
                element: '6',
                left: {
                    element: '8',
                },
                right: {
                    element: '9',
                    left: {
                        element: '11',
                        left: {
                            element: '13',
                        },
                    },
                    right: {
                        element: '12',
                        right: {
                            element: '14',
                        },
                    },
                },
            },
        },
    };
};

const renderTree = (node) => {
    const { left, right, element } = node;
    return `
        <div id="${element}" class="node-element">${element}</div>
        ${left || right ?
            `
            <div class="bottom-line"></div>
            <div class="node-children">
                ${left ?
                    `
                    <div class="node">
                        ${renderTree(left)}
                    </div>
                    `
                 : `
                 <div class="node">
                    <div class="null-node"></div>
                 </div>
                `}
                ${right ?
                    `
                    <div class="node">
                        ${renderTree(right)}
                    </div>
                    `
                 : `
                 <div class="node">
                    <div class="null-node"></div>
                 </div>`
                }
            </div>
            `
            : ''
        }
    `
}


const resetBackgroundColors = () => {
    const elems = document.getElementsByClassName("node-element");
    const elements = Array.from(elems);

    elements.forEach((element) => {
        element.style.backgroundColor = "lightyellow";
    })
}

const start = async (traversal) => {
    if(traversalStarted) return;

    const rootNode = getTreeData();

    resetBackgroundColors();

    traversalStarted = true;
    if(traversal == "inorder"){
        await inorderTraversal(rootNode);
    }
    else if(traversal == "preorder"){
        await preorderTraversal(rootNode);
    }
    else{
        await postorderTraversal(rootNode);
    }
    traversalStarted = false;
}

const renderArrays = () => {
    const arrays = ["inorder-array", "postorder-array", "preorder-array"];

    arrays.forEach(traversalArray => {
        const domArray = document.getElementById(traversalArray);
        const fragment = document.createDocumentFragment();

        let i=0;

        while(i < 15){
            const cell = document.createElement('div');
            cell.id = `${traversalArray}-${i}`;
            cell.style = `
                grid-column-start: ${i + 1};
                grid-column-end: ${i + 2};
                border: brown solid 1px;
                height: 80px;
                aspect-ratio: 1;
            `;
            fragment.appendChild(cell);

            i++;
        }

        domArray.appendChild(fragment);
        
    })
}

const main = () => {
    const rootNode = getTreeData();
    const treeDOM = document.getElementById("tree");
    treeDOM.innerHTML = renderTree(rootNode);
    renderArrays();
}

main();

document.getElementById("inorder").addEventListener('click', ()=>start("inorder"));
document.getElementById("preorder").addEventListener('click', ()=>start("preorder"));
document.getElementById("postorder").addEventListener('click', ()=>start("postorder")) ;

