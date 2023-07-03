/*funçao scrolled e menu*/
window.addEventListener('load', function () {
    var div = document.querySelector('#header');
    var div2 = document.querySelector('.btn');
    var div3 = document.querySelector('#desenho1');
    var div4 = document.querySelector('#desenho2');
    var scrollPosition = window.scrollY;

   if (scrollPosition > 0) {
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

    window.addEventListener('scroll', function () {
        if (!document.querySelector('.mobile-menu.active')) {
            var scrollPosition = window.scrollY;

            if (scrollPosition > 0) {
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
        }
    });
});

class MobileNavbar {
    constructor(mobileMenu, pag, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.pag = document.querySelector(pag);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks() {
        var i = 0;
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
            }s`);
        });
    }
    
    handleClick() {
        var div = document.querySelector('#header');
        var div2 = document.querySelector('.btn');
      
        div.classList.toggle('scrolled');
        div2.classList.toggle('scrolled');
        
        this.pag.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".pag",
    ".pag li",
);
mobileNavbar.init();


/*footer*/
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

/*boletim*/

function abrirPaginaFlutuante1() {
    var paginaFlutuante1 = document.getElementById("paginaFlutuante1");
    paginaFlutuante1.style.display = "flex";
}
function abrirPaginaFlutuante2() {
    var paginaFlutuante2 = document.getElementById("paginaFlutuante2");
    paginaFlutuante2.style.display = "flex";
}
function abrirPaginaFlutuante3() {
    var paginaFlutuante3 = document.getElementById("paginaFlutuante3");
    paginaFlutuante3.style.display = "flex";
}

function fecharPaginaFlutuante() {
    var paginaFlutuante1 = document.getElementById("paginaFlutuante1");
    paginaFlutuante1.style.display = "none";
    var paginaFlutuante2 = document.getElementById("paginaFlutuante2");
    paginaFlutuante2.style.display = "none";
    var paginaFlutuante3 = document.getElementById("paginaFlutuante3");
    paginaFlutuante3.style.display = "none";
}


/*altura header*/

let header = document.querySelector("#header");
let headerHeight = getComputedStyle(header).height;
document.documentElement.style.setProperty("--header-height", headerHeight);

/*altera cronograma*/

    var selectElement = document.getElementById("menu-dia");
    var paragraphElement = document.getElementById("p-cron");
    paragraphElement.innerHTML = "Conteúdo para a opção 1.";
function alterarConteudo() {
    var selectedOption = selectElement.value;

    if (selectedOption === "dia1") {
        paragraphElement.innerHTML = "Conteúdo para a opção 1.";
    } else if (selectedOption === "dia2") {
        paragraphElement.innerHTML = "Conteúdo para a opção 2.";
    } else if (selectedOption === "dia3") {
        paragraphElement.innerHTML = "Conteúdo para a opção 3.";
    }
}
