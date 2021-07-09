const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const ham = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    if(nav.style.maxHeight){
        nav.style.maxHeight = null;
        ham.classList.remove('hamburger-open');
    }
    else{
        nav.style.maxHeight = nav.scrollHeight + "px";
        ham.classList.add('hamburger-open');
    }
})