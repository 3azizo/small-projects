const container=document.querySelector(".container")
const left=document.querySelector(".split.left")
const right=document.querySelector(".split.right")

left.addEventListener("mouseenter",()=>container.classList.add("hover-left"))
left.addEventListener("mouseleave",()=>container.classList.remove("hover-left"))
right.addEventListener("mouseenter",()=>container.classList.add("hover-right"))
right.addEventListener("mouseleave",()=>container.classList.remove("hover-right"))


// function addToContainer(classTo){container.classList.add(classTo)}
// function removeToContainer(classTo){container.classList.remove(classTo)}
// [{
//     event:"mouseenter",
//     el:right,
//     handler:addToContainer.bind(null,"hover-right"),
// },{
//     event:"mouseleave",
//     el:right,
//     handler:removeToContainer.bind(null,"hover-right"),
// },{
//     event:"mouseenter",
//     el:left,
//     handler:addToContainer.bind(null,"hover-left"),
// },{
//     event:"mouseleave",
//     el:left,
//     handler:removeToContainer.bind(null,"hover-left"),
// }
// ].forEach(el=>{
//     el.el.addEventListener(el.event,el.handler);
// })