let hamBurger =  document.querySelector('.hamburger__menu');
let navMenu = document.querySelector('.nav__menu');

hamBurger.addEventListener('click',()=>{
    navMenu.classList.toggle("open");
   
});