let audios=document.querySelectorAll('source');
let container=document.querySelector(".container");

container.addEventListener("click",function(e){
    stopSongs()
    let btn =e.target ;
    if(btn.dataset.sora!==""){
        audios.forEach(audio=>{
            if(audio.id==btn.dataset.sora){
               audio.closest('audio').play();
            }
        })
    return;
    }
})
const stopSongs=()=>{
    audios.forEach(audio=>{
        let src=audio.closest("audio");
        src.pause();
        src.currentTime=0;
    });
}