
/*class person{
    sex(){
        console.log("they want sex single time in a day.");

    }
    kiss(){
        console.log("to stay stress free man need atleast 2 kiss per day");

    }
}

class animal extends person{
    dog(){
        console.log("they want to eat anythiong which you give them");
    }
    cat(){
        console.log("they want to drink milk in a half of day. ");
    }
}

let damjibhai = new animal();

console.log(damjibhai.kiss());


//you are creating a website for your collage.create a class user with 2 properties,name and emiil.
//it also has mathod called viewData() that allows user to view website data.
let data="ye badiya tha guru";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
    console.log(data);
    }

}
class admin extends user{
    constructor(name,email){
        super(name,email);
    
    }   
    editdata(){

    console.log("ye usse bhii badiya he guru");

    }
}

let chokra= new user("raj","a@gmail.com");
let chokri=new user ("hasti","h@gmail.com");
let Admin = new admin("admin","admin@gmail.com");
console.log(chokra);
console.log(chokri.viewData()); 
console.log(Admin.editdata());


function getData(D_id,getNextData){
    setTimeout(()=>{
        console.log("data",D_id);
        if(getNextData){
            getNextData();
        }
        
    },2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});

*/


function getData(D_id,getNextData){
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("data",D_id);
        resolve("successs");
        if(getNextData){
            getNextData();
        }
        
    },2000);
    });

}