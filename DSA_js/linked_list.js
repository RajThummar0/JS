class List{
    constructor(data){
        this.head={
            value: data,
            next: null,
        };
        this.tail=this.head;
        this.size=1;
    }
    appendNode(nodedata){
        let newnode={
            value:nodedata,
            next:null
        };
        this.tail.next=newnode,
        this.tail=newnode;
        this.size+=1;
    }

}

let list=new List(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);




console.log(list);