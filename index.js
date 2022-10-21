function menuBar(){
    this.classList.toggle('flip');
    all.classList.toggle('vis');
    sidemenu.classList.toggle('vie');
};
let ham = document.querySelector('#hamburger');
let all = document.querySelector('.all');
let sidemenu = document.querySelector('.sidemenu');
ham.addEventListener('click',menuBar);