/*function Apple(x){
    console.log(x);
    if(x<10){
        Apple(x+1);
    }
}
let data=0;
Apple(data);
*/

/*
//Factorial number
function factorial(item){
    if(item==0){
        return 1
    }
    return item*factorial(item-1)
    
}
let data=6;
console.log(factorial(data));

*/
let money=100;
let totalapple=0;
function buyapple(x){
    if(x>0){
        console.log('the money is',x,'and apple is ',totalapple);
        buymore(x-10);
    }else{
        console.log(totalapple);
    }
}
function buymore(x){
    totalapple++;
    buyapple(x-5);
}
buyapple(money);