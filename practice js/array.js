/*const { jsx } = require("react/jsx-runtime");

const price=[250,645,300,900,50];
let c = price
console.log(price);// This will not change the original array

for(let val of price){
    let offer = (val / 10);
    let c = val - offer;
    console.log(c);
}*/

/*for (let r;r>price.length;r++){
     // Assuming a fixed discount of 10%
    var offer =(price[r]/10);
}
let c=price-offer;
 console.log(c);   
*/
/*
let a=[1,2,3,4];
let b= ["raj","sita","ram","gita","bittu"];
let r=a.concat(b);
a.push(6); // Adds 6 to the end of array a
a.unshift(0);//add in start of array a
let h=a.pop(); // Removes the last element from array b
b.push("neha"); // Adds "neha" to the end of array b
//array.toString(); // Converts the array to a string
console.log(a.toString()); // Output: "raj,sita,ram,gita,bittu"
console.log(r); 
console.log(a); // Output: [1,2,3,4,5,6]
let slice= a.slice(1,3); // Extracts elements from index 1 to 2 (not including index 3),(starting index, ending index+1)
console.log(slice); // Output: [2,3]
var splice = a.splice(1,2,102); // Removes 2 elements starting from index 1(starting index,ketla delet krva e 2 k 3 m,add element 101,105,111 m) and adds 102
var splice= a.splice(1,0,1111); // Removes 2 elements starting from index 1 and adds 102
console.log(splice); // Output: [2,3]
console.log(a); // Output: [1,102,4,5,6]

*/

//Q1 - create array compony (i)remove first compony name (ii)Remove Uber and add their OLA (iii) add Amazon at end of array
let compony = ["bloomberg","Microdoft","uber","Google","IBM","Netflix"];
console.log(compony);
compony.shift();//i
compony.splice(2,0,"OLA")//ii
compony.push("Amazon");//iii

console.log(compony);

