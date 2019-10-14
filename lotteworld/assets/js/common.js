$(function() {

  // 언어선택창 on / off
  $('.lang button').on('click', function() {
    $(this).toggleClass('open');
    $('.lang-box').slideToggle();
  })

  // 웹 메뉴
  $('.header .depth01').on('mouseenter', function() {
    if(!$('.search-box').hasClass('open')) {
      $('.header .depth01').removeClass('on');
      $(this).addClass('on');
      if($('.header').hasClass('navOpen')) {
        $('.header .depth02').hide();
        $(this).next().show();
      } else {
        $('.header').addClass('navOpen');
        $(this).next().stop().slideDown(300);
        $('.nav-bg').stop().slideDown(300);
      }
    }
  })
  $('.header .nav .depth02 > li > a').on('mouseenter', function() {
    $('.depth03').hide();
    $('.header .nav .depth02 > li > a').removeClass('on');
    $(this).addClass('on');
    $(this).next().show();
  })
  $('.header').on('mouseleave', function() {
    $('.header .depth01').removeClass('on');
    $('.header').removeClass('navOpen');
    $('.nav-bg').stop().slideUp(300);
    $('.header .depth02').stop().slideUp(300);
    $('.header .nav .depth02 > li > a').removeClass('on');
  })


  // 모바일 메뉴
  $('.header .ham-btn').on('click', function() {
    $('.m-nav').addClass('open');
    $('body').css('overflow','hidden');
  })
  $('.m-nav .m-close-btn').on('click', function() {
    $('.m-nav').removeClass('open');
    $('body').css('overflow','auto');
  })
  $('.m-nav .depth01').on('click', function() {
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().slideUp(300);
    } else {
      $('.m-nav .depth01').removeClass('open');
      $('.m-nav .depth02').slideUp(300);
      $(this).addClass('open');
      $(this).next().slideDown(300);
    }
    return false;
  })
  $('.m-nav .depth02 a.depth03-btn').on('click', function() {
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().slideUp(300);
    } else {
      $('.m-nav .depth03-btn').removeClass('open');
      $('.m-nav .depth03').slideUp(300);
      $(this).addClass('open');
      $(this).next().slideDown(300);
    }
    return false;
  })


  // 웹 검색창 토글
  $('.search-btn').on('click', function(e) {
    if($('.search-box').hasClass('open')) {
      // 닫기
      $('.search-box').slideUp(300).removeClass('open');
      $('.shadow-bg').stop().fadeOut(300);
      $('.header .depth01').css({'color':'#000', 'cursor':'pointer'})
      $('.quick-box').css('z-index','50');
    } else {
      // 열기
      $('.search-box').slideDown(300).addClass('open');
      $('.shadow-bg').stop().fadeIn(300);
      $('.header .depth01').css({'color':'rgba(0,0,0,.5)', 'cursor':'default'})
      $('.quick-box').css('z-index','5');
    }
  })
  // 모바일 검색창 토글
  $('.header .m-search-btn').on('click', function() {
    $(this).toggleClass('on');
    $('.search-box').slideToggle(300);
  })

  // 검색창 닫기
  $('.search-box .close-btn').on('click', function() {
    $('.search-box').slideUp(300).removeClass('open');
    $('.shadow-bg').stop().fadeOut(300);
    $('.header .depth01').css({'color':'#000', 'cursor':'pointer'})
    $('.quick-box').css('z-index','50');
  })
  $('.quick-box button').on('click', function() {
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.shadow-bg').stop().fadeOut(300).css('z-index', '10');
      $('.quick-box .quick-inner').stop().fadeOut(300);
    } else {
      $(this).addClass('open');
      $('.shadow-bg').stop().fadeIn(300).css('z-index', '50');
      $('.quick-box .quick-inner').stop().fadeIn(300);
    }
  })

// 검색창 영역밖 선택시
  $(document).on('click', function(e) {
    if($(e.target).hasClass('shadow-bg')) {
      if($('.search-box').hasClass('open')) {
        $('.search-box').slideUp(300).removeClass('open');
        $('.shadow-bg').stop().fadeOut(300);
        $('.quick-box').css('z-index','50');
        $('.header .depth01').css({'color':'#000', 'cursor':'pointer'})
      } else if($('.quick-box button').hasClass('open')) {
        $('.quick-box button').removeClass('open');
        $('.shadow-bg').stop().fadeOut(300).css('z-index', '10');
        $('.quick-box .quick-inner').stop().fadeOut(300);
      }
    }
  })

  $('.top-btn').on('click', function() {
    $('html, body').animate({scrollTop : 0},1000);
  })
  

  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var footerHeight = $('.footer').height();

    // header fixed
    if(scrollTop > 0) {
      $('#wrap').addClass('fixed');
    } else {
      $('#wrap').removeClass('fixed');
    }

    // quick button, top button
    if($(window).width() > 1000) {
      if($(window).scrollTop() + $(window).height() >= $(".footer").offset().top) {
        $('.quick-box').css({'position':'absolute','bottom':footerHeight+50});
        $('.top-btn').css({'bottom':footerHeight}).stop().fadeIn(300);
      } else {
        $('.quick-box').css({'position':'fixed','bottom':'70px'});
        $('.top-btn').stop().fadeOut(300);
      }
    } else if($(window).width() > 758) {
      if($(window).scrollTop() + $(window).height() >= $(".footer").offset().top) {
        $('.quick-box').css({'position':'absolute','bottom':footerHeight+50});
        $('.top-btn').css({'bottom':footerHeight}).stop().fadeIn(300);
      } else {
        $('.quick-box').css({'position':'fixed','bottom':'50px'});
        $('.top-btn').stop().fadeOut(300);
      }
    } else {
      if($(window).scrollTop() + $(window).height() >= $(".footer").offset().top) {
        $('.quick-box').css({'position':'absolute','bottom':footerHeight+50});
        $('.top-btn').css({'bottom':footerHeight}).stop().fadeIn(300);
      } else {
        $('.quick-box').css({'position':'fixed','bottom':'50px'});
        $('.top-btn').stop().fadeOut(300);
      }
    }

  })


})