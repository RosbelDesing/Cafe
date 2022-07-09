const navToggle=document.querySelector(".nav-toggle")
const navMenu=document.querySelector(".nav-menu")

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("nav-menu-circulo");})


const menuLinks = document.querySelectorAll(".nav-menu a[href^=\"#\"]");

menuLinks.forEach(menuLink =>{ 
    menuLink.addEventListener("click",function() {
        navMenu.classList.remove("nav-menu-circulo");
    })
});