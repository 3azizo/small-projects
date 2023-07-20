let allSmall = document.querySelectorAll(".glass-small");
let fill = document.querySelector(".fill");

let watherHeight = 0;
allSmall.forEach((small, idx) => {
  small.addEventListener("click", function (e) {
    if (
      allSmall[idx].classList.contains("full") &&
      !allSmall[idx].nextElementSibling.classList.contains("full")
    ) {
      idx--;
    }
    allSmall.forEach((cup, idx2) => {
      if (idx2 <= idx) {
        cup.classList.add("full");
      } else {
        cup.classList.remove("full");
      }
    });
    watherHeight = (idx + 1) * 12.5;
    fill.textContent = `${watherHeight}%`;
    if (watherHeight < 10) fill.textContent = "";
    fill.style.height = `${watherHeight}%`;
  });
});
