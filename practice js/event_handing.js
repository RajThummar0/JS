/*btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);

}

ram= document.querySelector("#ram");

ram.onmouseover = () =>{
    console.log("you are inn div")
}*/


let modeBtn=document.querySelector("#mode");
let body = document.querySelector("body");
let currMode="light";
modeBtn.addEventListener=("click", () => {
    if(currMode === "light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
 
    }
    console.log(currMode);

});