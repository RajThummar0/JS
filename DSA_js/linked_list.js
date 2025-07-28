class lisstt{
    constructor(data){
        this.head={
            value: data,
            next: null,
        };
        this.tail=this.head;
        this.size=5;
    }
    appendNode(nodedata){
        let newnode={
            value:nodedata,
            next:null
        };
        this.tail.next=newnode;
        this.tail=newnode;
        this.size+=1;

    }
    traversing(){
        let counter=0;
        let currentNode=this.head;
        while(currentNode<this.size){
            console.log(currentNode)
            currentNode=currentNode.next;
            counter++;
        }
    }
    deletenode(){

    }
}

let list=new lisstt(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.traversing();
list.deletnode(4);
console.log(list);