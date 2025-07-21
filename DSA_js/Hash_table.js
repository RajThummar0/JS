let data={
    name: 'Raj',
    age: 20,
    city : 'rajkot',
    Number : 1234567890
    
    }

data.name='ABC'  //update name
delete data.age;    //delete age

for(x in data){
    //console.log(x);
    console.log(data[x]); //access value
}

//console.log(data.name); //access name
console.log(Object.keys(data)); //access getname function
console.log(Object.values(data)); //access getvalue function