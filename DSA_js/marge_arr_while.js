let arr1=[52,63,75,2,556];
let arr2=[48,76,94,52];
let arr3=[];

let d1=0;
let d2=0;
let d3=0;

while(d1<arr1.length&&d2<arr2.length){

    if(arr1[d1]<arr2[d2]){

        arr3[d3]=arr1[d1];
        d1++;

    }
    else{
        arr3[d3]=arr2[d2];
        d2++;
    }
    d3++;
}
while(d1<arr1.length){
    arr3[d3]=arr1[d1];
    d1++;
}
console.log(arr3);