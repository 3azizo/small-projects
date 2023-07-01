const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
console.log(bg);
let load = 0;
let int = setInterval(burring, 30);

function burring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.textContent = `${load}%`;
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${Math.ceil((1 - load / 100) * 100)}px)`;

  console.log(`blur(${Math.ceil((1 - load / 100) * 100)}px);`);
}
