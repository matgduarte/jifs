/*funçao scrolled e menu*/
window.addEventListener('load', function () {
    var div3 = document.querySelector('#desenho1');
    var div4 = document.querySelector('#desenho2');
    var scrollPosition = window.scrollY;

   if (scrollPosition > 0) {
                div3.classList.add('scrolled');
                div4.classList.add('scrolled');
            } else {
                div3.classList.remove('scrolled');
                div4.classList.remove('scrolled');
            }

    window.addEventListener('scroll', function () {
        if (!document.querySelector('.mobile-menu.active')) {
            var scrollPosition = window.scrollY;

            if (scrollPosition > 0) {
                div3.classList.add('scrolled');
                div4.classList.add('scrolled');
            } else {
                div3.classList.remove('scrolled');
                div4.classList.remove('scrolled');
            }
        }
    });
});