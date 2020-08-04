var header = document.getElementsByClassName('header')[0];
var swiper1 = new Swiper ('#swiper1', {
  direction: 'vertical',
  speed: 800,
  loop: false,
  allowTouchMove: false,
  mousewheel: true,
  pagination: {
    el: '#pagination1',
    clickable: true,
    bulletClass: 'my-bullet',
    bulletActiveClass: 'my-bullet-active',
  },
  hashNavigation: {
    watchState: true,
  },
  on: {
    slideChangeTransitionStart: function() {
      if (this.activeIndex > 0) {
        header.className = 'header header-moving';
      } else {
        header.className = 'header';
      }
    },
    init: function() {
      swiperAnimateCache(this);
      swiperAnimate(this);
    },
    slideChangeTransitionEnd: function() {
      swiperAnimate(this);
    },
  },
});

var swiper2 = new Swiper ('#swiper2', {
  direction: 'horizontal',
  speed: 800,
  loop: true,
  allowTouchMove: false,
  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '#pagination2',
    clickable: true,
    modifierClass: 'prime-pagination-',
    bulletClass: 'prime-bullet',
    bulletActiveClass: 'prime-bullet-active',
  },
});
