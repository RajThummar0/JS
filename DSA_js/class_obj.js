class Stack{
    arr=[];
    currentsize;
    maxsize;
    constructor(value){
        this.maxsize=5;
        this.currentsize=this.arr.length;
    }
    push(newvalue){
        if(this.currentsize>=this.maxsize){
            console.log("Stack is overflow: ");
        }
        else{
            this.arr[this.currentsize]=newvalue;
            this.currentsize++;
            console.log("Pushed value: " + newvalue);
        }

    }
    pop(){

    }
    display(){

    }
}

let stack=new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

