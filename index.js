//remove a duplicate in array

function remove(arr) {
    let n = arr.length;
    let j = 0;
    for (let i = 0; i < n - 1; i++){
        if (arr[i] !== arr[i + 1]) {
            arr[j] = arr[i];
            j++;
        }
    }
    arr[j] = arr[n - 1];
    return j + 1
}

console.log(remove([1,2,2,3,3,3,4,4]))