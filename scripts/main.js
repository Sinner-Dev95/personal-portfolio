console.log("I'm working");


const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu-container');

console.log(hamburger);
console.log(menu);


hamburger.addEventListener('click', function(){
    console.log('Hamburger cliccato');
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');  // ← MANCA QUESTO?
});
