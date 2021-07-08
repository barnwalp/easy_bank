// To ensure that logic runs only after document is loaded
window.onload = function(){
    const btnHamburger = document.querySelector('#btnHamburger');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');

    btnHamburger.addEventListener("click", function(){
        console.log('clicked hamburger');
        // remove overlay
        if (header.classList.contains('open')){
            overlay.classList.add('fade-out');
            overlay.classList.remove('fade-in');
            header.classList.remove('open');
        }
        // open overlay
        else {
            header.classList.add('open');
            overlay.classList.add('fade-in');
            overlay.classList.remove('fade-out');
        }
    });
}