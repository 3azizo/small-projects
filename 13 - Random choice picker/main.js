let choicesInput=document.getElementById("enter-choices");
let choicesContainer=document.querySelector(".choices")
choicesInput.addEventListener("keyup",function(e){
    let value= e.target.value;
    console.log(value);
    createTags(value)
    if(e.key==="Enter"){
        setTimeout(()=>{
            e.target.value=""
        },10)
        randomSelect()
    }
   
    
});

function createTags(input){
    let choices= input.split(",").filter(tag=>tag.trim()!=="")
    .map(tag=>tag.trim())
    
    choicesContainer.innerHTML="";

    choices.forEach(tag=>{
        const tagEl=document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerText=tag;
        choicesContainer.appendChild(tagEl)
    })

}

function randomSelect(){
    const times=30;
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag()
        hifhLightTag(randomTag)

        setTimeout(()=>{
            unhifhLightTag(randomTag)
        },100)
        
    },100)

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            let randomTag=pickRandomTag();
            hifhLightTag(randomTag)
        },100)

    },times*100)

}

function pickRandomTag(){
    const tags=document.querySelectorAll(".choices span");
    return tags[Math.floor(Math.random()*tags.length)]
}

function hifhLightTag(tag){
    tag.classList.add("highlight")
}

function unhifhLightTag(tag){
    tag.classList.remove("highlight")
}