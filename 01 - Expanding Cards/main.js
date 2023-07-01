const panels = document.querySelectorAll(".panel");
panels.forEach((panels) => {
  panels.addEventListener("click", () => {
    removactive();
    panels.classList.add("active");
  });
});
function removactive() {
  panels.forEach((panels) => {
    panels.classList.remove("active");
  });
}
