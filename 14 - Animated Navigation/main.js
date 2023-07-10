let btn=document.getElementById("toggle");
let nav=document.querySelector("nav")
console.log(btn,nav);
btn.addEventListener("click",()=>nav.classList.toggle("active"))
