let arr=[];
let size=arr.length;

function push(value){
    arr[size]=value;
    size+=1;
}
function pop(){
    lastremovedItem=arr[size-1];
    size-=1;
    arr.length=size;
    return lastremovedItem;
}
function reversestr(item){
    for(let i=0;i<item.length;i++){
        push(item[i]);
    
    }
    for(let i=0;i<item.length;i++){
        item[i]=pop();
    }
} 
let str="RAJ";
str=str.split("");
reversestr(str);
console.log(str);

