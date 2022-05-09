const burgerButton = document.getElementById("burger");
const navMenu = document.getElementById("burger-menu");


// function openBurgerMenu() {
//     navMenu.style.display = "block"
// }

function openBurgerMenu() {

    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}