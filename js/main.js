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

function onNextClick(arguments) {
  mySiema.next();
}
function onPrevClick(arguments) {
  mySiema.prev();
}

//*             pictures lightbox for Family              *//