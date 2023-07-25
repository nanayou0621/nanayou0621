'use strict';
{
const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close= document.getElementById('close');

open.addEventListener('click',() =>{
  overlay.classList.add('show');
  open.classList.add('hide');
});
close.addEventListener('click',() =>{
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.top-image');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }
  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;

  }
  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click' ,() =>{
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.button-nav').appendChild(button);

    }
    dots[0].classList.add('current');
  }

  function updateDots(){
    dots.forEach(dot =>{
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
    
  }
  

  updateButtons();
  setupDots();
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
    updateDots();

  });
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
    updateDots();

  });
  window.addEventListener('resize',() =>{
    moveSlides();
  });
}
const pagetop = document.getElementById("pagetop");

// .pagetopをクリックしたら
pagetop.addEventListener("click",()=>{
// ページ上部へスムーズに移動
    window.scroll({
      top:0,
      behavior:"smooth"
  });
});
    }
  

