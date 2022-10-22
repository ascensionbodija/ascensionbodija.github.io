/*the site as a whole has been written using vanilla JavaScript (ES6) and CSS3 with a strong emphasis on 
quick, easy, long-term website maintenance in mind*/
/*when adding new features please refrain from using frameworks like bootstrap*/
/*or the reactJS library, unless absolutely neccesary.*/
/*the code is straightforward enough if you know what you are doing*/

function menuBar(){
    this.classList.toggle('flip');
    all.style.transition="1s";
    all.classList.toggle('vis');
    sidemenu.classList.toggle('vie');
};
let ham = document.querySelector('#hamburger');
let all = document.querySelector('.all');
let sidemenu = document.querySelector('.sidemenu');
ham.addEventListener('click',menuBar);
alert('Site under construction! Status quo for preview purposes only!')