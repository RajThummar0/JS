//remove the element which you want from array
/*function removeEL(){
let arr=[10,20,30,40,50,60];
let position=document.getElementById('position').value;
position=parseInt(position);

for (let i=position;i<arr.length-1;i++){
    arr[i]=arr[i+1];
}
arr.length=arr.length-1;
console.log(arr);
}
*/

//without html removing the element

let arr=[10,20,30,40,50,60];
let position=3;

for (let i=position;i<arr.length;i++){
    arr[i]=arr[i+1];
}
    arr.length=arr.length-1

console.log(arr);