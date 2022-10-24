/*the site as a whole has been written using vanilla JavaScript (ES6) and CSS3 with a strong emphasis on 
quick, easy, long-term website maintenance in mind*/
/*when adding new features please refrain from using frameworks like bootstrap*/
/*or the reactJS library, unless absolutely neccesary.*/
/*the code is straightforward enough if you know what you are doing*/

function menuBar(){
    this.classList.toggle('flip');
    sidemenu.classList.toggle('vis');
};
let ham = document.querySelector('#hamburger');
let sidemenu = document.querySelector('.sideBar');
ham.addEventListener('click',menuBar);

let land = document.querySelector('#landing');
let w = window.innerWidth;
if(w>900){
land.classList.add('backSwitch');
}

alert('Site under construction! Status quo for preview purposes only!');
