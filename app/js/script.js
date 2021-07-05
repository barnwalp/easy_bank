// To ensure that logic runs only after document is loaded
window.onload = function(){
    const btnHamburger = document.querySelector('#btnHamburger');
    console.log('is it working??');
    btnHamburger.addEventListener("click", function(){
        console.log('clicked hamburger');
        if (btnHamburger.classList.contains('open')){
            btnHamburger.classList.remove('open');
        }
        else {
            btnHamburger.classList.add('open');
        }
    });
}