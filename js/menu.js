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
  
  /*altura do header*/
        // Obtenha a referência do elemento
        var elemento = document.getElementByClassName('header');
        var elemento2 = document.getElementByClassName('pag');

        // Obtenha a altura da janela
        var alturaJanela = window.innerHeight;

        // Obtenha a altura do elemento
        var alturaElemento = elemento.offsetHeight;

        // Calcule a altura desejada
        var alturaDesejada = alturaJanela - alturaElemento;

        // Atribua a altura desejada ao elemento
        elemento2.style.top = alturaDesejada + 'px';

  
  
