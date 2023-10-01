'use strict';
// ローディング画面
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const londingText =document.querySelector('#loading p');

window.addEventListener('load',()=> {
  loadingAreaGrey.animate(
    {
    opacity:[1,0],
    visibility:'hidden',
  },
  {
    duration:2000,
    delay:1200,
    easing:'ease',
    fill:'forwards',
  }
);
  loadingAreaGreen.animate(
    {
      translate:['0 100vh','0 0','0 -100vh']
    },
  {
    duration:2000,
    delay:800,
    easing:'ease',
    fill:'forwards',
  }
);
  loadingText.animate(
    [
      {
        opadity:1,
      },
      {
        opadity:0,
      },
    ],
    {
      duration:1200,
      easing:'ease',
      fill:'forwards',
    }
  );
});
// スライドショー
$(function(){
   $(document).ready(function(){
        $(".slider").bxSlider();
      });
    });
// ハンバーガーメニュー
const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');


open.addEventListener('click', () => {
  overlay.classList.add('active');
  open.classList.add('show');
});
close.addEventListener('click', () => {
  overlay.classList.remove('active');
  open.classList.remove('show');
});

// サブメニュー
$(function() {
  $('.has-menu').mouseover(function() {
      $('.sub-menu a', this).stop().slideDown('fast');
  })
  .mouseout(function() {
      $('.sub-menu a', this).stop().slideUp('fast');
  });
});


// カルーセル
const mySwiper = new Swiper ('.swiper', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る
  slidesPerView: '2', //何枚表示するか
  speed: 2000, // スライドアニメーションのスピード（ミリ秒）
  centeredSlides : true,
  autoplay: { //自動再生する
  delay: 4000, //次のスライドに切り替わるまでの時間
  disableOnInteraction: false, //ユーザーが操作したら止めるか
  waitForTransition: false, // アニメーションの間にスライドを止めるか
  },
});