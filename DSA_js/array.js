// in array print sum is zero
/*function getsumpairzero(array) {
    for(let number of array){
        for(let i=1;i<array.length;i++){
            if(number+array[i]===0){
                return[number,array[i]];
                

            }
        } 
        }

}
let result = getsumpairzero([-5,-4,-3,-2,-1,0,1,2,3,4,5,6]);
console.log(result);










// OR


function getsum(Array){
    let left=0;
    let right=Array.length-1;

    while(left<right){
        let sum=Array[left]+Array[right];
        if(sum ===0){
            return[Array[left],Array[right]];
        }
        else if(sum>0){
            right--;
        }
        else{
            left++;
        }
    }
}


let Result = getsum([-5,-4,-3,-2,-1,0,1,2,3,4,5,6]);
console.log(Result);
/*
/*
//print the array
let arr=[52,52,45,63,5,3,4]

for(let i=0;i<arr.length;i++){
  
  
    console.log(arr[i])
}
*/
//insert a value in array of any position
let arr=[10,20,30,40,50,60,70,80,90];
let value=55;
let position=4;

console.log(arr);
for (let i=arr.length - 1;i>=0;i--){
    if(i>=position){
        arr[i+1]=arr[i];
        if(i==position)
        {
            arr[i]=value;
        }
        
}
}

console.log(arr);