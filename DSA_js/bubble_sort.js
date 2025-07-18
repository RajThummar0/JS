//bubble sort accending order

let arr=[6,5,4,3,2,1];

for (let i=0;i<arr.length;i++){
    console.log(arr);  //full process jovi hoi to unlock kro check kro khush rho
    for(let j=0;j<arr.length;j++){
        
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);
/*
let arr2=[34,4,45,22];
//bubble sort decending order

for(let i=0;i<arr2.length;i++){
    //console.log(arr2);  //full process jovi hoi to unlock kro check kro khush rho
    for(let j=0;j<arr2.length;j++){
        
        if(arr2[j]<arr2[j+1]){/// change here for decending order < >
            let temp=arr2[j];
            arr2[j]=arr2[j+1];
            arr2[j+1]=temp;
        }
    }
}
console.log(arr2); //output: [45, 34, 22, 4] (sorted in descending order)*/