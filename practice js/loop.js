/*var a=prompt("Enter a number");
for (var i=1;i<=a;i++){
    console.log(i);
}
console.log("Loop finished",i);

/*
let a = prompt("Enter a number");
console.log(a);
sum=0;
for(let i=0;i<=5;i++){
    sum+=i;
}
console.log(sum);
*/
/*

let i=0;
let n = 5;
let sum = 0;
do{
    console.log(sum);
    i++;
    sum += i;
}
while(i<=n)

*/
/*
let n=5;
let sum = 0;
for (let i=0;i<=n;i++)
{
    sum += i;
    console.log(i);
}
console.log(sum);
*/
/*
let str="sjn";
sum=0;
for (let i in str){
    console.log(i);
    sum++;

}

console.log("sum of string is ",sum); 

*//*
//print 1 to 100 odd numbers 
for (let i=0;i<=100;i++){
	if(i%2!=0){
	console.log(i);
	}
}

//print 1 to 100 even numbers 
for (let i=0;i<=100;i++){
	if(i%2==0){
	console.log(i);
	}
}/*
/*
let obj={
     a :"padhlo madar chodo",
     b :"padi samaj jadhalnav",

};
let c=`a is telling that ${obj.a} and b is telling that ${obj.b}`;

console.log(typeof c);
*//*

console.log("1+2"+3); // "1+23"
console.log(1+2+"3"); // "33"
console.log(1+"2"+3); // "123"
console.log("1"+2+"3"); // "123"
console.log(1+"2+3"); // 6


let str="  PAdhlo Madar Chodo";
str=str.toUpperCase();

console.log(str);
str=str.toLowerCase();
console.log(str);

str=str.trim();
console.log(str);*/

let a ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(a.slice(1,9,1))
let b=a.length;
console.log(b);
console.log(a.replace("A","a"));
console.log(a);

let c="hello";
console.log(c.replace("l","         "));