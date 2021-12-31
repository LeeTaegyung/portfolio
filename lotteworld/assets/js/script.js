$(function() {

  var visualSlider = new Swiper('.sec01 .swiper-container', {
    slidePerView: 1,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.sec01 .swiper-button-next',
      prevEl: '.sec01 .swiper-button-prev',
      
    },
    pagination: {
      el: '.sec01 .swiper-pagination',
      clickable: true,
    },
  });

  $('.sec01 .swiper-pagination').append('<button type="button" class="stop-btn"><span class="text-out">정지</span></button>');
  $('.sec01 .stop-btn').on('click', function() {
    if($(this).hasClass('play')) {
      $(this).removeClass('play');
      visualSlider.autoplay.start();      
    } else {
      $(this).addClass('play');
      visualSlider.autoplay.stop();
    }
  })


  var visualSlider = new Swiper('.sec04 .swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 22,
    scrollbar: {
      el: '.sec04 .swiper-scrollbar',
      hide: false,
      draggable: true,
      dragSize: 46,
    },
    breakpoints: {
			758: {
				centeredSlides: false,
			}
		}
  });

  $('.tab-box button').on('click',function() {
    var idx = $(this).parent().index();
    $('.tab-box button').removeClass('on');
    $(this).addClass('on');
    $('.content-box .tab-content').removeClass('on');
    $('.content-box .tab-content').eq(idx).addClass('on');
  })

  if($(window).width() < 758 ) {
    var sec03Slider = new Swiper('.sec03 .swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: '.sec03 .swiper-pagination',
        clickable: true,
      },  
    });
    
  }

  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop() + $(window).height() / 2;
    var sec02 = $('.sec02');
    var sec03 = $('.sec03');
    var sec04 = $('.sec04');
    var sec05 = $('.sec05');
    var sec06 = $('.sec06');

    if($(window).width() > 1000) {
      if(sec02.offset().top <= scrollTop && sec03.offset().top >= scrollTop) {
        $('.sec02').addClass('on');
      } else if(sec03.offset().top <= scrollTop && sec04.offset().top >= scrollTop) {
        $('.sec03').addClass('on');
      } else if(sec04.offset().top <= scrollTop && sec05.offset().top >= scrollTop) {
        $('.sec04').addClass('on');
      } else if(sec05.offset().top <= scrollTop && sec06.offset().top >= scrollTop) {
        $('.sec05').addClass('on');
      } else if(sec06.offset().top <= scrollTop && $('.footer').offset().top >= scrollTop) {
        $('.sec06').addClass('on');
      }
    }
  })

})