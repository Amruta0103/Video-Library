const menu = document.querySelector(".menu");
const nav = document.querySelector(".videoOptions");

menu.addEventListener("click", handler);

function handler(){
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}

const navLink = document.querySelectorAll(".videoOptionItem");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
 menu.classList.remove("active");
 nav.classList.remove("active");
}

