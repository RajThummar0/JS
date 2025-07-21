//set doesn;t allow duplicate values its remove automatically
let data = new Set(   //in set S is 'S' not like set but its Set okhy 
     ['raj','raj','ram','krishna']
);

let item= ['raj','raj','ram','krishna']

console.log(data.has('ram')); //to check its present  or not
data.add({'age' : 20});  //its allow to enter object values
console.log(data);
console.log(item);
/*
//for loop
for (let x of data ){
    console.log(x);
}
    */


//for each loop

data.forEach((val)=>{
    console.log(val);
})