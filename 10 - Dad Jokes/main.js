let h2= document.querySelector("h2");
let btn=document.querySelector(".btn");

async function fetchJoke(){
    let response= await fetch("https://icanhazdadjoke.com/",{
        headers:{
            "Accept":'application/json'
        }
    });
     let data=await response.json();
    h2.textContent=data.joke
}
fetchJoke();
btn.addEventListener("click",fetchJoke);