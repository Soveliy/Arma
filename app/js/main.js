windowSize = $(window).width();
$(window).on('resize', function(event){
  windowSize = $(window).width(); 

  if(windowSize < 1025){
    $(".where-to-buy__info-item-container").removeClass("active");
    $('.where-to-buy__map-container').removeClass('active');

  }
  else{
    $(".where-to-buy__info-item-container:first-child").addClass("active");
    $('.where-to-buy__map-container:first-child').addClass('active');
    $(".where-to-buy__modal-container").removeClass("active")
  }
});
$('.where-to-buy__modal-container,.where-to-buy__map-container-close').click(function(){
  $(".where-to-buy__modal-container").removeClass("active")
  $(".where-to-buy__info,.where-to-buy__info-item-container").removeClass("active");
  $('.where-to-buy__map-container').removeClass('active');
});

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



  $(document).ready(function() {

    windowSize = $(window).width();
    if(windowSize < 1025){
      $(".where-to-buy__info-item-container").removeClass("active");
      $('.where-to-buy__map-container').removeClass('active');
    
    }
    else{
      $(".where-to-buy__info-item-container:first-child").addClass("active");
      $('.where-to-buy__map-container:first-child').addClass('active');
      $(".where-to-buy__modal-container").removeClass("active")
    }
  
    // Initializing fullpage.js

     

    $('#fullpage').fullpage({
    

    responsiveHeight: 640,
    responsiveWidth: 1024,
    // menu: '#menu',
      
    slidesNavigation: true,
    scrollingSpeed: 1000,
    
    scrollHorizontally: false,
    fitToSection:true,

   
    anchors: ['hero', 'features', 'catalog', 'footer']
    });
    
     
  
     
    });
  
    $.fancybox.defaults.backFocus = false;

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
  $(".where-to-buy__modal-container").removeClass("active")
  $(".where-to-buy__info").removeClass("active");
  $('.where-to-buy__map-container').removeClass('active');
});

var galleryThumbs_card = new Swiper('.card__gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop_card = new Swiper('.card__gallery-top', {
  // spaceBetween: 10,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: {
    swiper: galleryThumbs_card
  }
});




$('.info-item__city').click(function(){
  $(this).closest("div.where-to-buy__info-item-container")
  .addClass('active').siblings().removeClass('active')
  .closest('div.where-to-buy__row').find('div.where-to-buy__map-container').removeClass('active').eq($(this).closest("div.where-to-buy__info-item-container").index()).addClass('active');
  $('.where-to-buy__modal-container').addClass('active');
});
// (function($) {
//   $(function() {
    
//     $('.where-to-buy__info').on('click', '.where-to-buy__info-item-container:not(.active)', function() {
      
    
       
 
         
        
//     });

   
    
//   });
//   })(jQuery);





$(".catalog__slider a").fancybox({

 afterLoad              : function( instance, slide ) {




  let galleryThumbs_modal = new Swiper('.fancybox-is-open .gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
    let galleryTop_card = new Swiper('.fancybox-is-open .gallery-top', {
      // spaceBetween: 10,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: galleryThumbs_modal
            }
    });
    
  
 


}
});
  $(document).ready(function() {
    $("a.main-menu__link").click(function () {
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      var windowSize = $(window).width(); 
      if(windowSize < 1025){
        // $(".header__menu").slideToggle(300);
        $(".main-menu").slideToggle();
        $(".burger").removeClass("active");
      }
      return false;
    });
   
  });
     
  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("#popup"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.hide(); // скрываем его
      }
    });
  });
  

  


  $(".link-modal").click(function(){
    $("#modal_call_back").arcticmodal();
  });
  $(".modal_text_but-js").click(function(){
    $("#modal_text_info").arcticmodal();
  });
  $(".mask_phone").mask("+7 (999) 999-99-99");


