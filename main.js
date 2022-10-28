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

var displayHeight = window.innerHeight;
let sideBar = document.querySelector(".sideBar");
let sideBarTop = sideBar.getBoundingClientRect().top;

let listButton = document.getElementsByClassName("listButton");
let i;
for(i=0;i<listButton.length;i++){
    listButton[i].addEventListener('click',function(){
        this.classList.toggle("active");
        let listBoxContent = this.nextElementSibling;
        if (listBoxContent.style.display === 'block'){
            listBoxContent.style.display='none';
        }
        else{
            listBoxContent.style.display='block';
        }
    });
}
// alert('Site under construction! Status quo for preview purposes only!');