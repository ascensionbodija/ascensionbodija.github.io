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
let sideBar = document.querySelector(".sideBar");
var plusButton = document.getElementsByClassName("plus");
var menuTitle = document.getElementsByClassName("menuTitle");
var menuCaption = document.getElementsByClassName("menuCaption");

for(let i=0;i<plusButton.length;i++){
    plusButton[i].addEventListener('click',function(){
        let collapsedMenuItem = this.nextElementSibling;
        let titleMenuItem = this.previousElementSibling;

        for(let i=0;i<plusButton.length;i++){
        menuTitle[i].style.display='none';
        menuCaption[i].classList.remove('active');
        collapsedMenuItem.classList.remove('slidey');
        }
        if (collapsedMenuItem.style.display === 'block'){
            collapsedMenuItem.style.display='none';
        }
        else{
            collapsedMenuItem.style.display='block';
            setTimeout(()=>{
                collapsedMenuItem.classList.add('slidey');
                titleMenuItem.classList.add('active');
            },30);
        }
    });
}
alert('Site under construction! Status quo for preview purposes only!');