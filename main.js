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
var moreOptions = document.getElementsByClassName("moreOptions");
var menuTitle = document.getElementsByClassName("menuTitle");
var subMenuTitle = document.getElementsByClassName("subMenuTitle");
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

    for(let i=0; i<moreOptions.length; i++){
        moreOptions[i].addEventListener('click', function(){
            let collapsedMenu = this.nextElementSibling;
            for(let i=0; i<moreOptions.length; i++){
                subMenuTitle[i].style.display='none';
                moreOptions[i].classList.remove('subActive');
                collapsedMenu.classList.remove('subSlidey');
            }
            if (collapsedMenu.style.display==='block'){
                collapsedMenu.style.display='none';
            }
            else{
                collapsedMenu.style.display='block';
                setTimeout(() => {
                    collapsedMenu.classList.add('subSlidey');
                    this.classList.add('subActive');
                }, 30);
            }
        })
    }
    
alert('Site under construction! Status quo for preview purposes only!');