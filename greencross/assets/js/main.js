$(function() {
  var index = $('.section.now').index();
  var next = 0;
  var prev = 0;
  var fullpageFlag = false;


  $('.section:eq(' + index + ')').css('z-index','5').css('top','0').addClass('actived');
  

  setTimeout(function(){
    setCloneAnimation(index);
  }, 1000);


  // full page
  $(window).on('mousewheel', function(e) {
    var index = $('.section.now').index();
    var sectionCount = $('.section').length - 1;
    var scrollTop = $('html, body').scrollTop();
    var delta = e.originalEvent.wheelDelta/120

    if(delta > 0 && fullpageFlag == false) {
      // scroll up

      if(!(index == 0) && scrollTop == 0) {
        fullpageFlag = true;
        index = index - 1;
        next = index + 1;
        $('.section').eq(index).css('z-index','5').animate({ top: 0 }, 500, 'easeInCubic').addClass('now');
        $('.section').eq(next).css('z-index','0').animate({ top: '100%' }, 1000, 'easeInCubic', function() {
          fullpageFlag = false; }).removeClass('now');
      }

    } else if(delta < 0 && fullpageFlag == false)  {
      // scroll down

      if(index != sectionCount) {
        fullpageFlag = true;
        index = index + 1;
        prev = index - 1;
        $('.section').eq(index).css('z-index','5').animate({ top: 0 }, 500, 'easeInCubic').addClass('actived now');
        $('.section').eq(prev).css('z-index','3').animate({ top: '-100%' }, 1000, 'easeInCubic', function() {
          fullpageFlag = false; }).removeClass('now');

        setCloneAnimation(index);

      }
    }


    // 마지막 섹션에서 footer 고정 삭제
    if(index == sectionCount) {
      $('.footer').removeClass('fixed');
    } else {
      $('.footer').addClass('fixed');
    }

    // 첫번째섹션과 마지막섹션이 아닐때 Top 버튼 온오프
    if(index == 0) {
      $('.top-btn').hide();
    } else {
      $('.top-btn').show();
    }
    
  })

  // top button
  $('.top-btn').on('click', function() {
    $('.top-btn').hide();
    $('.section').removeClass('now');
    $('.section').eq(0).css('z-index','5').animate({ top: 0 }, 800, 'easeInCubic').addClass('now');
    for(i = 1; i < $('.section').length; i++) {
      $('.section').eq(i).css('z-index','0').animate({ top: '100%' }, 1000, 'easeInCubic');
    }
    $('.footer').addClass('fixed');    
  })

  slider('.sec02');
  slider('.sec04');

})


// 슬라이드
function slider(selector) {

  // bxslider
  var slide = $(selector + ' .slide-wrap').bxSlider({
    infiniteLoop: false,
    controls: false,
    pager: true,
    pagerCustom: selector + ' .slider-custom',
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


// 홀수 section 애니메이션
function setCloneAnimation(idx) {
  var sectionIndex = $('.section').eq(idx);
  var sectionWord = sectionIndex.find('.title');
  var firstWord = sectionWord.find('.first-word');
  var secondWord = sectionWord.find('.second-word');
  var firstWordWidth = firstWord.width();
  var firstWordSpan = firstWord.find('*');
  var secondWordSpan = secondWord.find('*');
  var sectionDesc = sectionIndex.find('.desc').find('*');

  if(!(idx % 2)) {
    if(sectionIndex.hasClass('actived')) {
      firstWord.find('.first').delay(2500).animate({opacity: 1}, 1000);
      secondWord.find('.first').delay(3000).animate({opacity: 1}, 1000);
      secondWord.delay(4000).animate({left: firstWordWidth}, 1000);

      for(n = 0; n < firstWordSpan.length; n++) {
        firstWordSpan.eq(n).delay(5000 + (n * 100)).animate({ opacity : 1 }, 1000);
      }

      for(n = 0; n < secondWordSpan.length; n++) {
        secondWordSpan.eq(n).delay(5000 + (n * 100)).animate({ opacity : 1 }, 1000);
      }

      for(n = 0; n < sectionDesc.length; n++) {
        sectionDesc.eq(n).delay(5000 + (n * 300)).animate({ paddingLeft : 0, opacity : 1 }, 1500);
      }
    }
  }
}