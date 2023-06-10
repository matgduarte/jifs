window.addEventListener('scroll', function () {
    var div = document.querySelector('header');
    var div2 = document.querySelector('.btn');
    var div3 = document.querySelector('#desenho1');
    var div4 = document.querySelector('#desenho2');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        div.classList.add('scrolled');
        div2.classList.add('scrolled');
        div3.classList.add('scrolled');
        div4.classList.add('scrolled');
    } else {
        div.classList.remove('scrolled');
        div2.classList.remove('scrolled');
        div3.classList.remove('scrolled');
        div4.classList.remove('scrolled');
    }
});
var b = document.getElementsByClassName('b-equipe')[0];
var div5 = document.getElementsByClassName('equipe')[0];
var div6 = document.getElementsByClassName('link')[0];
var div7 = document.getElementsByClassName('a-equipe');
var div8 = document.getElementsByClassName('hr-f')[0];
var isClicado = false;

b.addEventListener('click', function () {
    if (!isClicado) {
        div6.classList.add('but');
        for (var i = 0; i < div7.length; i++) {
            div7[i].classList.add('but');
        }
        div5.classList.add('but');
        div8.classList.add('but');
        isClicado = true;
    } else {
        div6.classList.remove('but');
        for (var i = 0; i < div7.length; i++) {
            div7[i].classList.remove('but');
        }
        div5.classList.remove('but');
        div8.classList.remove('but');
        isClicado = false;
    }
});
/*Menu Responsivo*/
let menu = document.querySelector("nav");
document.querySelector("#menu-btn").onclick = () => {
    menu.classList.toggle("ativo");
}
window.onscroll = () => {
    menu.classList.remove("ativo");
}