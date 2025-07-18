let data={
    name: 'Raj',
    age: 20,
    city : 'rajkot',
    Number : 1234567890
    getname:function(){
        return this.name;
    }
}
data.name='hasti'  //update name
delete data.age;    //delete age

console.log(data);
console.log(data.name); //access name
console.log(object.keys(data)); //access getname function