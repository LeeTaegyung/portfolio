$(function() {

  var slide = $('.keyword .slider').bxSlider({
    infiniteLoop: false,
    controls: false,
    moveSlides: 1,
    slideWidth: 'auto',
    pager: true,
    pagerCustom: '.slider-control',
    onSliderLoad: function() {
      flagBtn(this);
    }
  });

  // prev button
  $('.slider-control .prev-btn').on('click', function() {
    slide.goToPrevSlide();
    flagBtn(slide);
  })

  // next button
  $('.slider-control .next-btn').on('click', function() {
    slide.goToNextSlide();
    flagBtn(slide);
  })


})

function flagBtn(slide) {
  if(slide.getCurrentSlide() == 0) {
    $('.prev-btn').attr('disabled', true);
  } else if(slide.getCurrentSlide() == slide.getSlideCount() - 1) {
    $('.next-btn').attr('disabled', true);
  } else {
    $('button').attr('disabled', false);
  }
}
