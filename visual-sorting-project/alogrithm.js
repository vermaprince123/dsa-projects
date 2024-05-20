const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

const swap=(i, j,arr)=>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



const bubbleSort = async (arr, callback, prefix)=>{
    const timer = getTimer(prefix)
    const n = arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-1-i;j++){
            await sleep(250);
            if(arr[j]>arr[j+1]){
                swap(j, j+1,arr);
                callback(j,j+1, prefix);
            }
        }
    }

    clearInterval(timer);
};

const selectionSort = async (arr, callback, prefix)=>{
    const timer = getTimer(prefix);
    const n = arr.length;
    for(let i=0;i<n-1;i++){
        let temp = i;
        for(let j=i+1;j<n;j++){
            await sleep(250);
            if(arr[j]<arr[temp]){
                temp = j;
            }
        }
        swap(i, temp, arr);
        callback(i,temp, prefix);
    }
    clearInterval(timer);
};

const insetionSort = async (arr, callback, prefix)=>{
    const timer = getTimer(prefix);
    const n = arr.length;
    for(let i=0;i<n-1;i++){
        let j = i+1;
        while(j>0 && arr[j]<arr[j-1]){
            await sleep(250);
            swap(j, j-1, arr);
            callback(j,j-1, prefix);
            j--;
        }
    }
    clearInterval(timer);
};

const partition = async (arr, callback, low, high, prefix) => {
    let pivotItem = arr[low];
    let left = low;
    let right = high;

    while(left < right){
        while(arr[left] <= pivotItem) left++;
        while(arr[right] > pivotItem) right--;

        if(left < right){
            await sleep(250);
            swap(left, right, arr);
            callback(left, right, prefix);
        }
    }

    await sleep(250);
    arr[low] = arr[right];
    arr[right] = pivotItem;
    callback(low, right, prefix);

    return right;
}

const quickSortRecursion = async (arr, callback, low, high, prefix) => {
    if(high <= low){
        return;
    }

    let pivot = await partition(arr, callback, low, high, prefix);

    await quickSortRecursion(arr, callback, low, pivot-1, prefix);
    await quickSortRecursion(arr, callback, pivot+1, high, prefix);
}


const quickSort = async (arr, callback, prefix) => {
    const timer = getTimer(prefix);
    await quickSortRecursion(arr, callback, 0, arr.length-1, prefix);
    clearInterval(timer);
}


const merge = async (arr, callback, low, high, mid, prefix) => {
    let temp = [];
    let ptr1 = low;
    let ptr2 = mid + 1;


    while (ptr1 <= mid && ptr2 <= high) {
        if (arr[ptr1] <= arr[ptr2]) {
            temp.push({ val: arr[ptr1], index: ptr1, style: getHeightandColor(ptr1, prefix) });
            ptr1++;
        } else {
            temp.push({ val: arr[ptr2], index: ptr2, style: getHeightandColor(ptr2, prefix) });
            ptr2++;
        }

    }

    while (ptr1 <= mid) {
        temp.push({ val: arr[ptr1], index: ptr1, style: getHeightandColor(ptr1, prefix) });
        ptr1++;
    }

    while (ptr2 <= high) {
        temp.push({ val: arr[ptr2], index: ptr2, style: getHeightandColor(ptr2, prefix) });
        ptr2++;
    }

    for (let i = 0; i < temp.length; i++) {
        await sleep(250);
        arr[low + i] = temp[i].val;
        setHeightandColor(low+i, temp[i].style.height, temp[i].style.color, prefix);
    }
};


const mergeSortRecursion = async (arr, callback, low, high, prefix) => {
    if (high <= low) return;

    let mid = Math.floor((low + high) / 2);
    await mergeSortRecursion(arr, callback, low, mid, prefix);
    await mergeSortRecursion(arr, callback, mid + 1, high, prefix);

    await merge(arr, callback, low, high, mid, prefix);
};

const mergeSort = async (arr, callback, prefix) => {
    const timer = getTimer(prefix);
    await mergeSortRecursion(arr, callback, 0, arr.length - 1, prefix);
    clearInterval(timer);
};