/*  The site as a whole has been written using HTML 5, 
    vanilla JavaScript (ES6) and CSS3 with strong emphasis on 
    quick, easy, long-term website maintenance in mind.

    When adding new features, please refrain from using frameworks 
    like bootstrap, or the reactJS library, unless absolutely
    necessary. 
    
    If it is perhaps that you wish to redesign the site from 
    scratch, that is another matter; but as it stands 
    for current purposes, it may not readily be seen as
    to why going through such great efforts would be useful.

    There is a comprehensive log as to all implementations made 
    by way of comment-based clarifications, as needed.
    Simply put, the code is straightforward enough for anyone 
    who knows what they are doing.
*/

let forward = document.getElementById('forward');
let forwardWV = document.getElementById('forwardWV');
let back = document.getElementById('backward');
let backWV = document.getElementById('backwardWV');
var latest = document.getElementById('scrollLatest');
var latestWV = document.getElementById('scrollLatestWV');
var n = latest.clientWidth;
var nWV = latestWV.clientWidth;
var m = -n;
var mWV = -nWV;

function navLatest(z){
    latest.scrollBy(z,0);
};
function navLatestWV(z){
    latestWV.scrollBy(z,0);
};

setTimeout(() => {
    navLatest(n);
    navLatestWV(nWV);
}, 3000);
setTimeout(() => {
    navLatest(n);
    navLatestWV(nWV);
}, 3000);
setTimeout(() => {
    navLatest(n);
    navLatestWV(nWV);
}, 3000);
setTimeout(() => {
    navLatest(n);
    navLatestWV(nWV);
}, 3000);
/*spammed the navLatest function to overcome poor network connection on mobiles. It only ever moves the intended target one step, so multiple iterations have no disadvantageous effects*/

forward.addEventListener('click', ()=> navLatest(n));
back.addEventListener('click', ()=> navLatest(m));

forwardWV.addEventListener('click', ()=> navLatestWV(nWV));
backWV.addEventListener('click', ()=> navLatestWV(mWV));

let plusBtn = document.getElementsByClassName('cardbutton');
let cmi = document.getElementsByClassName('cardmenuItem');
let cmOpt = document.getElementsByClassName('cardmenuOptions');
let cmOptMore = document.getElementsByClassName('cardmenuOptionsMore');
let sublinks = document.getElementsByClassName('sublinks');

function openSideBar(){
    this.classList.toggle('flip');
    side.classList.toggle('sb_active');
//fixes bug unique to safari browser
    for(let i=0; i<cmi.length; i++){
        cmi[i].classList.toggle('visib');
        cmOpt[i].classList.toggle('visib');
        cmOptMore[i].classList.toggle('visib');
    }
//end bug fix
}

function animCycle(){
    document.body.style.setProperty('--cycle', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}

let hamby = document.getElementById('hamburger');
let side = document.getElementsByClassName('sidebar')[0];

hamby.addEventListener('click', openSideBar);

for (i=0; i<(plusBtn.length-1); i++){
    plusBtn[i].addEventListener('click', function activeCMI (){
        this.previousElementSibling.classList.toggle('active');        
        this.nextElementSibling.classList.toggle('cmi_active');        
    });
}

plusBtn[plusBtn.length-1].addEventListener('click', function activeLastCMI ()
    {
        for (i=0; i<(plusBtn.length-1); i++){
            cmOpt[i].classList.remove('cmi_active');
            cmi[i].classList.remove('active');
        }
        this.previousElementSibling.classList.toggle('active');        
        this.nextElementSibling.classList.toggle('cmi_active');        
    }
    );

var hasMoreOpt = document.getElementsByClassName('hasMoreOpt');

for(let i=0; i<hasMoreOpt.length; i++){
    hasMoreOpt[i].addEventListener('click', function(){
        let collapsedMenu = this.nextElementSibling;
        for(let i=0; i<hasMoreOpt.length; i++){
            cmOptMore[i].style.display='none';
            hasMoreOpt[i].classList.remove('grayOut');
        }
        if (collapsedMenu.style.display==='block'){
            collapsedMenu.style.display='none';
        }
        else{
            collapsedMenu.style.display='block';
            setTimeout(() => this.classList.add('grayOut'), 30);
        }
    })
}

/***********************************/
/*********Social Media Links********/

window.addEventListener('scroll', animCycle, false);

function gramRedirect(){
    window.location.assign("https://www.instagram.com/catholicchurchoftheascension");
}
function faceRedirect(){
    window.location.assign("https://web.facebook.com/catholicchurchoftheascension");
}
function whatRedirect(){
    window.location.assign("https://wa.me/2349019667689?text=Hello%20Ascension!%20I%20have%20been%20directed%20from%20your%20website.%20I%20would%20like%20some%20more%20information.");
}


let ig = document.querySelector('#ig');
let fb = document.getElementById('fb');
let ws = document.getElementById('ws');
let igM = document.querySelector('#igM');
let fbM = document.getElementById('fbM');
let wsM = document.getElementById('wsM');


ig.addEventListener('click', gramRedirect);
fb.addEventListener('click', faceRedirect);
ws.addEventListener('click', whatRedirect);

igM.addEventListener('click', gramRedirect);
fbM.addEventListener('click', faceRedirect);
wsM.addEventListener('click', whatRedirect);

let igWeb = document.querySelector('#igWeb');
let fbWeb = document.getElementById('fbWeb');
let wsWeb = document.getElementById('wsWeb');
igWeb.addEventListener('click', gramRedirect);
fbWeb.addEventListener('click', faceRedirect);
wsWeb.addEventListener('click', whatRedirect);

let titleWV = document.getElementById('titleWV');
titleWV.innerHTML = "<p>Catholic<br>Church of<br>the Ascension<br> Bodija</p>"
