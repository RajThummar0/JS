let arr = [20, 12, 53, 3];
//accending order
function selectionsort(items) {
    for (let i = 0; i < arr.length; i++) {
        let minID = i;
        for (let j = i; j < arr.length; j++) {
            //if we set j=i so when we comes on next element then its start from next element
            if (arr[j] < arr[minID]) {
                minID = j;
            }
        }
        let temp = arr[minID];
        arr[minID] = arr[i];
        arr[i] = temp;
    }
}

selectionsort(arr);
console.log(arr); //output: [2, 25, 56, 58,63] (sorted array)
// This code implements the selection sort algorithm to sort the array in ascending order.
/*

let arr = [20, 12, 53, 3];
//decending order
function selectionsort(items) {
    for (let i = 0; i < arr.length; i++) {
        let minID = i;
        for (let j = i; j < arr.length; j++) {
            //if we set j=i so when we comes on next element then its start from next element
            if (arr[j] > arr[minID]) {
                //khel he yaha per <  ,  > iska
                minID = j;
            }
        }
        let temp = arr[minID];
        arr[minID] = arr[i];
        arr[i] = temp;
    }
}

selectionsort(arr);
console.log(arr);
*/