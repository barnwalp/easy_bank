// To ensure that logic runs only after document is loaded
window.onload = function(){
    const btnHamburger = document.querySelector('#btnHamburger');
    const header = document.querySelector('.header');
    btnHamburger.addEventListener("click", function(){
        console.log('clicked hamburger');
        if (header.classList.contains('open')){
            header.classList.remove('open');
        }
        else {
            header.classList.add('open');
        }
    });
}