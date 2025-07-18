/*let a1=[2,3,5];
let a2=[5,4,6];

let a3=a1+","+a2;
console.log(a3);
*/

let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let arr3=[];

for (let i=0;i<arr1.length;i++){
    arr3[i]=arr1[i];
}
for (let i=0;i<arr2.length;i++){
    arr3[arr1.length+i]=arr2[i];
}
console.log(arr3);

