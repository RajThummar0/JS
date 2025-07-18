/*let arr=[25,26,3,52,46,514,568,562,252,65,5];
let find=52;
let position=undefined;
let start=0;
let end=arr.length;
arr.sort((a,b)=>a-b);
console.log(arr); //output: [3, 5, 25, 26, 52, 65]

while(start<=end){
    let mid=Math.floor((start+end)/2);
    if(arr[mid]===find){
        position=mid;
        break;
    }
    else if(arr[mid]<find){
        start=mid+1;
     
    }
    else{
        end=mid-1;
        

    }
}
console.log("your finding value is ",find,"position is",position,"in sorted array" ); //output: 3 (index of 52 in the sorted array)
*/


//using recursion

let arr=[25,26,3,52,46,514,568,562,252,65,5];
let find=562;
let position =undefined;
start=0;
end=arr.length;
arr.sort((a,b) => (a-b));
console.log(arr); //output: [3, 5, 25, 26, 46, 52, 65, 252, 562, 568, 514]

function BinarySearch(arr,start,end){
    let mid=Math.floor((start+end)/2);
    if(arr[mid]===find){
        position=mid;
        console.log(position);
    }
    else if(arr[mid]<find){
        BinarySearch(arr,mid+1,end);
    }
    else{
        BinarySearch(arr,start,mid-1);
    }
}

BinarySearch(arr,start,end)

console.log(position);
