let arr=[];
let maxvalue=5;
function push(value){

    if(arr.length>=maxvalue){
        console.log("Stack is overflow"+value);
    }else{

    arr[arr.length]=value;
    arr.length+1;
}
}
function pop(){
    if(arr.length<=0){
        console.log("Stack is Underflow");
    }
    else{
        arr.length-=1;
    }
}
push(10);
push(20);   
push(30);   
push(40);
pop();
pop();
console.log(arr);