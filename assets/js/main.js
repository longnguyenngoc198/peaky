var menuBtn = document.querySelector('.menu-btn');
var isOpen = false;
var openBar = document.querySelector('.navbar-mobile-wrap');
var lockScroll = document.querySelector('html');
menuBtn.onclick = function() {
    if(menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
        openBar.classList.remove('open-bar');
        lockScroll.classList.remove('lockscroll');
    } else {
        menuBtn.classList.add('open');
        openBar.classList.add('open-bar');
        lockScroll.classList.add('lockscroll');
    }
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

// load more
const loadmore = document.querySelector('#load-btn');
        let currentItems = 8;
        loadmore.addEventListener('click', (e) => {
            const elementList = [...document.querySelectorAll('.instagram-list .instagram-item')];
            for (let i = currentItems; i < currentItems + 8; i++) {
                if (elementList[i]) {
                    elementList[i].style.display = 'block';
                }
            }
            currentItems += 8;

            // Load more button will be hidden after list fully loaded
            if (currentItems >= elementList.length) {
                loadmore.style.display = 'none';
            }
        })