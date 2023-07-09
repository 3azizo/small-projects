const form=document.querySelector("form")
const marker=document.querySelector(".marker")
let output=document.querySelector(".generated-border")
form.addEventListener("change",function(){
    let dataArr=[...new FormData(this)];
    let {height,width,topLeft,topRigth,bottomLeft,bottomRigth} = Object.fromEntries(dataArr);
   
    let border=`${topRigth}% ${100-topRigth}% ${topLeft}% ${100-topLeft}%/
   ${bottomRigth}% ${100-bottomRigth}% ${bottomLeft}% ${100-bottomLeft}% `

    marker.style.cssText=`width:${width}px;height:${height}px;border-radius:${border}`;
    output.value=`border-radius:${border}`
})

document.querySelector("#copy").addEventListener("click",function(){
    output.select();
    document.execCommand("copy");
    alert("code copied")
})