var wow = new WOW();
new WOW().init();

//   $('#wrapper').fullpage({
//     autoScrolling:true,
//     scrollBar: false,
//     scrollHorizontally: true,
//     responsiveWidth: 1024,
//     responsiveHeight:768,
   
//   });

// $('.js-to-game').click(function () {
//   fullpage_api.moveTo(3);
// });

  


var hero__top_slider = new Swiper('.hero__slider-top .swiper-container', {
  pagination: {
    el: '.top-slider__swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.top-slider__swiper-button-next',
    prevEl: '.top-slider__swiper-button-prev',
  },
});
var hero__bot_slider = new Swiper('.hero__slider-bot .swiper-container', {
  pagination: {
    el: '.slider-bot__swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.slider-bot__swiper-button-next',
    prevEl: '.slider-bot__swiper-button-prev',
  },
});

var catalog__slider = new Swiper('.catalog__slider .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 150,
  centeredSlides: true,
  initialSlide:1,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

