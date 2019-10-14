$(function() {
    
  var footerTop = $('.footer').offset().top;
  var windowHeight = $(window).height();


  $('.location .now').on('click', function(){
    $(this).parent().toggleClass('open');
    $('.location .depth .list').slideToggle();
  })

  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();

    if($('.location .depth').hasClass('open')) {
      $('.location .depth').removeClass('open'); 
    }

    if(scrollTop == 0) {
      $('.footer').addClass('hidden');
    } else if(scrollTop > 0) {
      $('.footer').removeClass('hidden').addClass('fixed');
      if((scrollTop + windowHeight) >= footerTop - 120) {
        $('.footer').removeClass('hidden fixed');
      }
    }

    if(scrollTop < 120) {
      $('.location').removeClass('fixed');
    } else if(scrollTop >= 120) {
      $('.location').addClass('fixed');
    }
  })


  
})