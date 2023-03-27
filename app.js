const mobileBtn = document.getElementById("btn");

function openMenu() {
  mobileBtn.classList.toggle("opened");
}

mobileBtn.addEventListener("click", openMenu);
