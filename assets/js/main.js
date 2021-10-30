var menuBtn = document.querySelector('.menu-btn');
var isOpen = false;

menuBtn.onclick = function() {
    if(menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
    } else {
        menuBtn.classList.add('open');
    }
}