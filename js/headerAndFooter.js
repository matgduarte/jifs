window.addEventListener('load', function () {
    var div = document.querySelector('#header');
    var div2 = document.querySelector('.btn');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      div.classList.add('scrolled');
      div2.classList.add('scrolled');
    } else {
      div.classList.remove('scrolled');
      div2.classList.remove('scrolled');
    }
  
    window.addEventListener('scroll', function () {
      if (!document.querySelector('.mobile-menu.active')) {
        var scrollPosition = window.scrollY;
  
        if (scrollPosition > 0) {
          div.classList.add('scrolled');
          div2.classList.add('scrolled');
        } else {
          div.classList.remove('scrolled');
          div2.classList.remove('scrolled');
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
  
      if (!document.querySelector('#header.scrolled')) {
        div.classList.toggle('scrolled');
        div2.classList.toggle('scrolled');
      }
  
      this.pag.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  
      if (!this.mobileMenu.classList.contains(this.activeClass)) {
        var scrollPosition = window.scrollY;
  
        if (scrollPosition === 0) {
          div.classList.remove('scrolled');
          div2.classList.remove('scrolled');
        }
      }
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
    paragraphElement.innerHTML ="Texto: 07:20 - 07:30 <br><br> Mesa de autoridades: 07:30 - 07:40 <br><br> Dança: 07:40 - 07:50 Entrada das modalidades: 07:50 - 08:00 <br><br> Hino do Brasil: 08:00 - 08:05 <br><br> Juramento do atleta: 8:05 -08:10 <br><br> Sequestro + gincana: 08:10 - 08:30 <br><br> 1°Jogo 8h30 - 9h20 (futsal M). <br><br>2° jogo 9h30 - 10h20 (futsal M). <br><br>3° jogo 10h30 (volei M)13h30 - Tênis de Mesa (M e F)";
function alterarConteudo() {
    var selectedOption = selectElement.value;

    if (selectedOption === "dia1") {
        paragraphElement.innerHTML = "Texto: 07:20 - 07:30 <br><br> Mesa de autoridades: 07:30 - 07:40 <br><br> Dança: 07:40 - 07:50 Entrada das modalidades: 07:50 - 08:00 <br><br> Hino do Brasil: 08:00 - 08:05 <br><br> Juramento do atleta: 8:05 -08:10 <br><br> Sequestro + gincana: 08:10 - 08:30 <br><br> 1°Jogo 8h30 - 9h20 (futsal M). <br><br>2° jogo 9h30 - 10h20 (futsal M). <br><br>3° jogo 10h30 (volei M)13h30 - Tênis de Mesa (M e F)";
    } else if (selectedOption === "dia2") {
        paragraphElement.innerHTML = "1° jogo 7h30 - 8h20 (futsal M). <br><br>2° jogo 8h30 - 9h20 (futsal M). <br><br>3° jogo 9h30 (volei F). <br><br>4° jogo 10h30 (volei mix - misto, servidores, alunos...rs).";
    } else if (selectedOption === "dia3") {
        paragraphElement.innerHTML = "1° jogo 7h30 - 8h20 (futsal M). <br><br> 2° jogo 8h30 - 9h20 (futsal M). <br><br>3° jogo 9h30 (futsal F). <br><br>13h30 -Xadrez (M e F)";
    }
}
