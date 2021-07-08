const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    if(nav.style.maxHeight){
        nav.style.maxHeight = null;
    }
    else{
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
})