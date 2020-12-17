$(document).ready(function() {
  function initSwiper(){
    new Swiper('.swiper--jumbotron', {
        effect: 'fade',
        followFinger: false,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        navigation: {
          nextEl: '.jumbotron--next',
          prevEl: '.jumbotron--prev',
        },
        pagination: {
          el: '.jumbotron--pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
    });
  }
  function initSwiperProducts(){
    swiper = new Swiper('.swiper--products', {
        effect: 'slide',
        followFinger: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        spaceBetween: 0,
        pagination: {
          el: '.product--pagination',
          clickable: true
        },
    });
  }
  initSwiper();
  if(window.innerWidth <= 1024) { 
    initSwiperProducts();
  }
  $(window).scroll(function() {
    window.scrollY  > document.getElementsByClassName('jumbotron')[0].clientHeight/2 ? $('header.header').addClass('active') : $('header.header').removeClass('active')
  });
  $(window).load(function(){
    // loader
  });
});
function gointTo(a) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.getElementById(a).offsetTop - 50
  })
}
function openMenu() {
  $('.side-menu').addClass('show');
  $('.overlay-side').fadeIn(100);
}
function closeMenu() {
  $('.side-menu').removeClass('show');
  $('.overlay-side').fadeOut(100);
}