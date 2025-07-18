let arr=[3,45,5,6,7,3];

let targer=45;  
let position=undefined;

for (let i=0;i<=arr.length;i++){
    if(arr[i]==targer){
        position=i;
        break;
    }
}
console.log(position);//return index of target element
