//*             slider for Hero              *//
const heroSlider = document.querySelector('.hero-list');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const mySiema = new Siema({
  selector: heroSlider,
  loop: true,
  duration: 1000,
  easing: 'cubic-bezier(.17,.67,.32,1.34)',
});
nextBtn.addEventListener('click', onNextClick);
prevBtn.addEventListener('click', onPrevClick);

function onNextClick() {
  mySiema.next();
}
function onPrevClick() {
  mySiema.prev();
}

//*             pictures lightbox for Family              *//
const lightbox = new SimpleLightbox('.gallery-link a', {});

//*             titles              *//

AOS.init();


// / Get the button:
let myButtonScroll = document.getElementById("myButtonScroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButtonScroll.style.display = "block";
  } else {
    myButtonScroll.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}