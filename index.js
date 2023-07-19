const bt = document.querySelector('.header-menu__button');
const hiddenClass = "header-menu__list--hidden";
const animClass = "anime";
const openBg = "url(assets/images/icon-menu.svg) no-repeat";
const closeBg = "url(assets/images/icon-menu-close.svg) no-repeat center";
let show = true;

bt.addEventListener('click', function(e){
    if (show){
        e.currentTarget.nextElementSibling.classList.remove(hiddenClass);
        e.currentTarget.nextElementSibling.classList.add(animClass);
        e.currentTarget.style.background = closeBg;
        e.currentTarget.style.backgroundSize = "contain";

    }else{
        e.currentTarget.nextElementSibling.classList.add(hiddenClass);
        e.currentTarget.nextElementSibling.classList.remove(animClass);
        e.currentTarget.style.background = openBg;
    }
    show = !show;
} ,false);