/*function aa(){
    console.log("Radhe Radhe🙏");
}

aa()

    //OR 


function bb(parameter){ //bb(parameter)()ani ander hoi ene argument key
    console.log(parameter);
}
bb("Radhe krishna😊");//aiya je lakhi ene argument key



//create a fun for sum 2 num

function sum(a,b){
    console.log(a+b)
}

sum(55,10)


//Arrow function

const ArrowFun = (a,b)=>{
    console.log( a + b);
    
}
ArrowFun(5,10); // Output: 15


function fun(str){

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (
    ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
    ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
  ) {
    console.log(ch);
  }
}


}
fun("cdcdaaaccx"); // Output: a, a, a, a


/*

function fun(str){
    let count = 0;
    for(let i =0;i<str.length;i++){ 
    if(i === "a"||str==="e"||str=== "i"||str=== "o"||str=== "u") {
        count++;
        
    }

    }
            console.log("vowel",count);
}
fun("cdcdaaaccx");


//higher order function 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach((r,idx)=>{//collback
    console.log(r,idx);
})*/

//usign for Each loop make a square of each element in the array
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.forEach((a)=>{
    console.log(a ** a);
})

//usign filter method filter we can filter the array

array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let A=array.filter((val)=>{
    return val % 2 === 0; // Filter even numbers
})
console.log(A); // Output: [2, 4, 6, 8, 10]

//using  reduce method to find max number in array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max=array.reduce((previous,current)=>{
    return previous > current ? previous : current;

})
console.log(max); // Output: 10*/

//student marks in filter our 90+ marks hoshiyar chokrav
/*
let marks = [95, 85, 90, 78, 88, 92, 99, 100];
let students=marks.filter((max)=>{
    return max>= 90; // Filter students with marks >= 90

})
console.log(students); // Output: [95, 90, 92, 99, 100]
*/

//take user inputt and make it sum and afteer that calculate  product of all numbers (factorial)

let n = prompt("Enter your Number");
let Array=[];
for(var i=1;i<=n;i++){
    Array[i-1]= i;
}
console.log(Array);


let sum=Array.reduce((previous,current)=>{
    return previous+current;
})
console.log(sum);

let factorial=Array.reduce((a,b)=>{
    return a*b;
    console.log(c);
})

console.log(factorial)