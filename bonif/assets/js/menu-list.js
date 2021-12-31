$(function() {
  var windowHeight = $(window).height();
  
  // scroll event
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var orderTop = $('.footer').offset().top;

    // header fixed
    if(scrollTop > 0) {
      $('.header').css('top','-97px');
    } else {
      $('.header').css('top','0');
    }

    // order button
    if((scrollTop + windowHeight) >= orderTop) {
      $('.main .order-btn').addClass('absol');
    } else {
      $('.main .order-btn').removeClass('absol');
    }
  })

  // tab menu
  $('.menu-type li button').on('click',function() {
    var dataInfo = $(this).parent().data("type");
    $('.menu-type li ').removeClass('on');
    $(this).parent().addClass('on');
    if(dataInfo == undefined) {
      $('.menu-list li').show();
    } else {
      $('.menu-list li').hide();
      $('.menu-list li[data-type="' + dataInfo + '"]').show();
    }
  })


  // top button
  $('.quick .top-btn').on('click', function() {
    $('html, body').animate({scrollTop : 0}, 500);
  })


})