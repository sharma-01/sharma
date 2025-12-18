const menuBtn = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-links');

menuBtn.onclick = () => {
    navMenu.classList.toggle("active");
}
