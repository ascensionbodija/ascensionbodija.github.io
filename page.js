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

document.body.style.setProperty('--innerHeight', window.innerHeight);
// let fH = document.body.style.getProperty('--footerHeight');
// let bH = document.body.style.getProperty('--bannerHeight');
// let mH = document.body.style.getProperty('--menuHeight');

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

let pageContent = document.getElementsByClassName('pageContent')[0];
let pageContentWV = document.getElementsByClassName('pageContentWV')[0];

async function readTextFrom(external, dest){
    let loading = await fetch(external);
    let content = await loading.text();
    pushContent=(x,y)=>x.innerText=y;
    pushContent(dest, content);
}

async function readContentFrom(external, dest){
    let loading = await fetch(external);
    let content = await loading.text();
    pushContent=(x,y)=>x.innerHTML=y;
    pushContent(dest, content);
}