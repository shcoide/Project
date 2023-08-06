const buttons=document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const offset =button.dataset.carouselButton==="next" ? 1:-1;
        const slides=button.closest("[data-carousel").querySelector("[data-slides");
        const activeslide=slides.querySelector("[data-active]");
        let newIndex=[...slides.children].indexOf(activeslide)+offset;
        if (newIndex<0)newIndex=slides.children.length -1;
        if(newIndex >=slides.children.length)newIndex =0;
        slides.children[newIndex].dataset.active=true;
        delete activeslide.dataset.active;
    });
});
function start_login(){
    let anm_start=document.getElementById("popup");
    anm_start.style.display='flex';
    let x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "rgba(255,255,255,0.1)";
    let y = document.getElementById("n1");
    y.style.backgroundColor = "rgba(223, 225, 231,0.6)";
}
function end_login(){
    let anm_end=document.getElementById("popup");
    anm_end.style.display='none';
    let x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = "rgba(255,255,255,1)";
    let y = document.getElementById("n1");
    y.style.backgroundColor = "rgba(223, 225, 231,1 )";
}
var model=document.getElementById("popup");
window.onclick=function(event){
    if(event.target==model)
    end_login();
}

window.addEventListener("scroll",revealeffect);
function revealeffect(){
    let reveals=document.querySelectorAll('.reveal');
    for(let i=0;i<reveals.length;i++){
        let windowheight=window.innerHeight;
        let revealtop=reveals[i].getBoundingClientRect().top;
        let revealpoint=80;
        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}