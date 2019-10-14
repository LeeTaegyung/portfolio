$(function(){
  var lifeOffset = [];
  var menuOffset;
  

  
  // sec01 slide
  var slide01 = $('.sec01 .slider').bxSlider({
    auto : true,
    pager : true,
    controls : false,
    pagerCustom: '.sec01 .slider-pager',
    onSlideAfter: function() {
      $('.sec01 .on').removeClass('on');
      $('.sec01 .slider > li').eq(slide01.getCurrentSlide() + 1).addClass('on');
    },
    onSliderLoad: function () {
        $('.sec01 .slider > li').eq(1).addClass('on');
    },
  });
  // sec04 slide
  var slide02 = $('.sec04 .slider').bxSlider({
    auto : false,
    pager : true,
    controls : false,
    moveSlides: 1,
    slideMargin: 80,
    slideWidth: 'auto',
    pagerCustom: '.sec04 .slider-pager',
    onSlideAfter: function() {
      $('.sec04 .slider .on').removeClass('on');
      $('.sec04 .text-slide .on').removeClass('on');
      $('.sec04 .slider > li').eq(slide02.getCurrentSlide() + 1).addClass('on');
      $('.sec04 .text-slide > li').eq(slide02.getCurrentSlide()).addClass('on');
    },
    onSliderLoad: function () {
        $('.sec04 .slider > li').eq(1).addClass('on');
        $('.sec04 .text-slide > li').eq(0).addClass('on');
    },
  });

  // sec04 prev button
  $('.sec04 .prev-btn').on('click', function() {
    slide02.goToPrevSlide();
  })
  // sec04 next button
  $('.sec04 .next-btn').on('click', function() {
    slide02.goToNextSlide();
  })


  newsSlider('.notice');
  newsSlider('.release');
  newsSlider('.share');




  $('.sec05 .thumb-wrap button').on('click', function(){
    var menuIdx = $(this).parent().index();
    var menuTxt = $('.sec05 .txt-wrap li');
    var menuThumb = $('.sec05 .thumb-wrap li');
    var menuImg = $('.sec05 .img-wrap li');

    menuTxt.removeClass('on');
    menuTxt.css('display','none');
    menuThumb.removeClass('on');
    menuImg.removeClass('on');
    menuTxt.eq(menuIdx).css('display','block');
    setTimeout(function() {
      menuTxt.eq(menuIdx).addClass('on');
    },100);
    menuThumb.eq(menuIdx).addClass('on');
    menuImg.eq(menuIdx).addClass('on');

  })

  // scroll event
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();

    for(var i = 0; i < $('.life-wrap').length; i++) {
      lifeOffset[i] = $('.life-wrap').eq(i).offset().top;
    }
    menuOffset = $('.sec05').offset().top;

    if(scrollTop > 0) {
      $('.header').addClass('fix');
    } else if(scrollTop <= 0 ) {
      $('.header').removeClass('fix');
    }

    // life-wrap motion
    if(scrollTop + 600 > lifeOffset[0] && scrollTop + 600 < lifeOffset[1]) {
      $('.life-wrap').eq(0).addClass('active');
    } else if (scrollTop + 600 > lifeOffset[1] && scrollTop + 600 < lifeOffset[2]) {
      $('.life-wrap').eq(1).addClass('active');
    } else if (scrollTop + 600 > lifeOffset[2] && scrollTop + 600 < lifeOffset[3]) {
      $('.life-wrap').eq(2).addClass('active');
    } else if (scrollTop + 600 > lifeOffset[3]) {
      $('.life-wrap').eq(3).addClass('active');
    }

    if(scrollTop + 600 > menuOffset) {
      $('.sec05').addClass('active');
    }
  })


function newsSlider(selector) {

  // bxslider
  var slide = $(selector + ' .slider').bxSlider({
    auto : false,
    pager : false,
    controls : false,
    onSliderLoad: function() {
      flagBtn(this, selector);
    }
  });

  // prev button
  $(selector + ' .prev-btn').on('click', function() {
    slide.goToPrevSlide();
    flagBtn(slide, selector);
  })

  // next button
  $(selector + ' .next-btn').on('click', function() {
    slide.goToNextSlide();
    flagBtn(slide, selector);
  })

}

// bxslider pager custom button disabled flag
function flagBtn(slide, selector) {
  if(slide.getCurrentSlide() == 0) {
    $(selector + ' .prev-btn').attr('disabled', true);
  } else if(slide.getCurrentSlide() == slide.getSlideCount() - 1) {
    $(selector + ' .next-btn').attr('disabled', true);
  } else {
    $(selector + ' button').attr('disabled', false);
  }
}




})