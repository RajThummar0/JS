let arr=[55,82,56,52,5];
let temp;
function reversearr(arr,start,end){
    console.log(arr);
    if(start<=end){
    temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    reversearr(arr, start + 1, end - 1);
    }
}

reversearr(arr,0,arr.length - 1);

/*           this is also inbuild function in js
arr.reverse();
console.log(arr);*/