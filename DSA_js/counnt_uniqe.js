 //1,2,3,4,5,6,7,8,9,8  count how many elements are there in array
 function Count_sum(array){
    if(array.length){ 
        let i=0;
        for (let j=1;j<array.length;j++){
            if(array[i]!==array[j]){
                i++;
                array[i]=array[j];
            }
        }
        return i+1;
        }else{
            throw new Error("array is empty");
            
        }

 }

 const result=Count_sum([11,85,63,75,26])
 console.log(result);