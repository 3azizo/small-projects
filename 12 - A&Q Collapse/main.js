let btns= document.querySelectorAll(".faq-toggle");
btns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        btn.closest(".faq").classList.toggle("active")
    })
})