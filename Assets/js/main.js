let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("bx-a");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("bx-a");
    navbar.classList.remove("active");
}


