'use strict';

//넷바 색상 변경
// let :변하는 상수 | const :변하지 않는 상수
const navbar =document.puerySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window. scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }

});