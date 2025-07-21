// ['name', 'raj'] and in object it is like 'name': 'raj' in object
// ['name', 'raj'] its print like  'name' => 'raj'in  map
// Map is a collection of key-value pairs
// 

let data= new Map(
    [
        ['name', 'Raj'],
        ['age', 20],
        ['single', true],
        [false,'mingle'],

    ]);
//data.clear(); //clear all entries in map

data.set('city', 'rajkot'); //add new key-value pair
console.log(data.size); //get size of map
console.log(data.has('age')); //check if key exists
console.log(data.get('name')); //get value by key
data.delete('age'); //delete key-value pair

console.log(data);
