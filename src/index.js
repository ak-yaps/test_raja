require("../src/stylesheets/main.scss");

const menu = document.getElementById("hiddenMenu");
const menuIcon = document.getElementById("menu__bars");

console.log(menuIcon);

hideMenu = () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
    menuIcon.style.color = 'black';
    
  } else {
    menu.style.display = "block";
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
    menuIcon.style.color = 'white';
  }
}

