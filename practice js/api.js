const url="https://official-joke-api.appspot.com/random_joke";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");


function getFacts(){
    fetch(url).then((response)=>{
        return response.json();

    }).then((data)=>{
        console.log(data);
        factPara.innerText = data.text;

    })
}

btn.addEventListener("click", getFacts);



/*
const getFacts = async () => {
    console.log("getting data..");
    let response = await fetch(url);
    console.log(response);
    let data= await response.json();
    factPara.innerText = data[2].text;
};
**/