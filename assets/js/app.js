/*global Vue*/
Vue.config.devtools = true;
'use strict';
new Vue({
  el: '#app',
  data:{
    jumbotronImage: ['01.jpg','cov1.jpg','cov2.jpg','cov3.jpg'],
    products: ['04.jpg', '05.jpg', '06.jpg', '07.jpg'],
    menus: [{
      name: 'about us',
      url: 'about-us'
    },{
      name: 'our product',
      url: 'our-product'
    },{
      name: 'why us?',
      url: 'why-us'
    },{
      name: 'gallery',
      url: 'our-gallery'
    },{
      name: 'articles',
      url: 'articles'
    },{
      name: 'contact us',
      url: 'contact-us'
    }],
    openMenu: false,
    scrolled: false
  },
  methods:{
    initSwiper(){
      swiper = new Swiper('.swiper--jumbotron', {
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
    },
    initSwiperProducts(){
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
    },
    registScroll: function (){
      window.scrollY  > document.getElementsByClassName('jumbotron')[0].clientHeight/2 ? this.scrolled = true : this.scrolled = false
    },
    gointTo(a) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.getElementById(a).offsetTop - 50
      })
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.initSwiper();
      if(window.innerWidth <= 1024) { 
        this.initSwiperProducts();
      }
    });
  },
  created(){
    window.addEventListener('scroll', this.registScroll);
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.registScroll);
  }
});