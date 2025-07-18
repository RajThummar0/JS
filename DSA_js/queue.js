let arr=[];
let currentsize=arr.length;
let maxsize=3;

function enqueue(newvalue){
    if(currentsize<maxsize){
         arr[currentsize]=newvalue;
        currentsize++;
    }
    else{
         console.log("Queue is overflow: ");

       
    }

}

function display(){

    console.log(arr);
}
function dequeue(){
        if(!isEmpty()){
            for(let i=0; i<arr.length; i++){

            arr[i] = arr[i + 1];
            //currentsize--;
         }
        
          currentsize--;
          arr.length=currentsize;
        }
        else{
            console.log("Queue is already empty");
        
    }
}


function front(){
    if(!isEmpty()){
        console.log(arr[0]);
    }
    else{
        console.log("Queue is empty");
        return null;
    }
}
function rear(){
    if(!isEmpty()){
        console.log(arr[currentsize-1]);
    }
    else{
        console.log("Queue is empty");
        return null;
    }
}
function isEmpty(){
    if(currentsize<=0){
        return true;
    }
    else{
        return false;
    }
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(30);


front();
rear();
display();