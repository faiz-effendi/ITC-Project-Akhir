const toggles = document.querySelectorAll(".toggle-trigger"); 

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    toggle.children[1].classList.toggle("hidden");
  })
})
