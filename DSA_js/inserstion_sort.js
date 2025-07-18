let arr=[11,12,5,30,6];

function insertionSort(data){
    let i,j,current;
    for(i=1;i<data.length;i++){
        current=data[i];
        j=i-1;
        while(j>=0 && data[j]>current){ //for accending order
        //while(j>=0 && data[j]<current){ //for decending order
            data[j+1]=data[j];
            j-=1;
        }
        data[j+1]=current;
    }

} 
insertionSort(arr);
console.log(arr); //output: [5, 6, 11, 12,30]y