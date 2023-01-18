// readContentFrom('./contM.txt',pageContent);

let call = document.getElementsByClassName('anthemCall')[0];
let callWV = document.getElementsByClassName('anthemCallWV')[0];
let call_2 = document.getElementsByClassName('themeCall')[0];
let call_2WV = document.getElementsByClassName('themeCallWV')[0];
let anthem = document.getElementById('anthem');
let groups = document.getElementById('groups');
let anthemWV = document.getElementById('anthemWV');
let groupsWV = document.getElementById('groupsWV');
let geninfo = document.getElementsByClassName('geninfo')[0];
let geninfoWV = document.getElementsByClassName('geninfoWV')[0];


groups.addEventListener('click', ()=> {
    show(geninfo);
    readContentFrom('./info.txt', geninfo);
    }
);
groupsWV.addEventListener('click', ()=> {
    show(geninfoWV);
    readContentFrom('./info.txt', geninfoWV);
});

anthem.addEventListener('click', ()=>{
    show(call);
});
anthemWV.addEventListener('click', ()=>{
    show(callWV);
});

theme.addEventListener('click', ()=>{
    show(call_2);
});
themeWV.addEventListener('click', ()=>{
    show(call_2WV);
});

function show (x){
    x.style.display='block';
    setTimeout(() => {
        x.style.opacity='1';
    }, 200);
}

readContentFrom('./info.txt', geninfoWV);