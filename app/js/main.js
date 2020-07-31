$(window).on('resize', function(event){
  windowSize = $(window).width(); 
});
windowSize = $(window).width();
$(document).ready(function() {
  $('.counter__minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.counter__plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
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

  spaceBetween: 30,
  slidesPerView: "auto",
  
  navigation: {
    nextEl: '.catalog__slider-swiper-button-next',
    prevEl: '.catalog__slider-swiper-button-prev',
  },

   // Responsive breakpoints
   breakpoints: {

    320: {
      
      spaceBetween: 30
    },
 
    1025: {
      slidesPerView: 3,
      spaceBetween: 150,
      centeredSlides: true,
      initialSlide:1,
    }
  }
});

catalog__slider.on('slideChangeTransitionStart', function () {
  $(".swiper-slide-active").addClass("js-active")
});

$('.catalog__view-button').click( function () {
  $('.catalog__view-button').removeClass('active');
  $(this).addClass('active');
});

$('.catalog__view-button--grid').click(function(){
  $('.catalog-item').removeClass('list');
  $('.catalog-item').addClass('grid');
});


$('.catalog__view-button--list').click(function(){
  $('.catalog-item').removeClass('grid');
  $('.catalog-item').addClass('list');
});
$('.burger').click(function(){
  $(this).toggleClass("active");
  $('.main-menu').slideToggle(300);
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  // spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  // spaceBetween: 10,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: {
    swiper: galleryThumbs
  }
});




(function($) {
  $(function() {
    
    $('.where-to-buy__info').on('click', '.where-to-buy__info-item-container:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.where-to-buy__row').find('div.where-to-buy__map').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })(jQuery);



  $(".catalog__slider a").fancybox({
		afterShow: function( instance, slide ) {

      var galleryThumbs = new Swiper('.gallery-thumbs', {
        // spaceBetween: 10,
        slidesPerView: 2,

      
        
      });
      var galleryTop = new Swiper('.gallery-top', {
        // spaceBetween: 10,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });

		}
  });
  

  $(document).ready(function() {
    $("a.main-menu__link").click(function () {
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 100}, 1100);
      var windowSize = $(window).width(); 
      if(windowSize < 1025){
        // $(".header__menu").slideToggle(300);
        $(".main-menu").slideToggle();
        $(".burger").removeClass("active");
      }
      return false;
    });
   
  });


  
  $(".link-modal").click(function(){
    $("#modal_call_back").arcticmodal();
  });
