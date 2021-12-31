$(function(){
  

  if(!$('#wrap').hasClass('sub')) {
    // 서브페이지 외
    // 메뉴 bg
    $('.nav').on('mouseenter', function(){
      $('.header').removeClass('bg02 bg03');
      $('.header').addClass('bg01');
    })
    // 유틸 bg
    $('.util').on('mouseenter', function(){
      $('.header').removeClass('bg01');
      $('.header').addClass('bg02');
      $('.nav .depth02').hide();
      $('.depth01-bar').css('opacity',0);
      $('.depth02-bar').css('opacity',0);
    })
    // 1차메뉴 hover
    $('.nav .depth01').on('mouseenter', function() {
      var navOffset = $(this).offset().left;
      var navWidth = $(this).width();
      $('.nav .depth02').hide();
      $(this).next().show();
      $('.depth01-bar').css('opacity',1).css('left',navOffset).css('width',navWidth);
      $('.depth02-bar').css('opacity',0);
    })
    // 2차메뉴 hover
    $('.nav .depth02 a').on('mouseenter', function() {
      var navOffset = $(this).offset().left;
      var navWidth = $(this).width();
      $('.depth02-bar').css('opacity',1).css('left',navOffset).css('width',navWidth);
    })
    // header mouseleave
    $('.header').on('mouseleave', function(){
      $('.header').removeClass('bg01 bg02');
      $('.nav .depth02').hide();
      $('.depth01-bar').css('opacity',0);
      $('.depth02-bar').css('opacity',0);
    })
  } else {
    $('.header').addClass('bg01');
    $('li.on > .depth02').show();
    setTimeout(function() {
      var depth01 = $('li.on > .depth01');
      var depth01Left = depth01.offset().left;
      var depth01Width = depth01.width();
      var depth02 = $('.depth02 > li.active > a');
      var depth02Left = depth02.offset().left;
      var depth02Width = depth02.width();
      $('.depth01-bar').css('opacity',1).css('left',depth01Left).css('width',depth01Width);
      $('.depth02-bar').css('opacity',1).css('left',depth02Left).css('width',depth02Width);
    }, 1000)
    $('.nav .depth01').on('mouseenter', function() {
      var navOffset = $(this).offset().left;
      var navWidth = $(this).width();
      $('.depth01-bar').css('opacity',1).css('left',navOffset).css('width',navWidth);
      $('.depth02-bar').css('opacity',0);
    })
    $('.nav .depth02 a').on('mouseenter', function() {
      var navOffset = $(this).offset().left;
      var navWidth = $(this).width();
      $('.depth02-bar').css('opacity',1).css('left',navOffset).css('width',navWidth);
    })
    $('.header').on('mouseleave', function() {
      var depth01 = $('li.on > .depth01');
      var depth01Left = depth01.offset().left;
      var depth01Width = depth01.width();
      var depth02 = $('.depth02 > li.active > a');
      var depth02Left = depth02.offset().left;
      var depth02Width = depth02.width();
      $('.depth01-bar').css('opacity',1).css('left',depth01Left).css('width',depth01Width);
      $('.depth02-bar').css('opacity',1).css('left',depth02Left).css('width',depth02Width);
    })
    $('.header').on('mouseenter', function() {
      $('.header').css('top','0');
    })
  
  }
  



  // search-wrap open 
  $('.search-open-btn').on('click', function() {
    $('.header').toggleClass('bg03');
    $(this).toggleClass('open');
    $('.search-wrap').toggleClass('open');
    $('.shadow-bg').fadeToggle(300);
  })
  // search-wrap select button
  $('.search-wrap .select-btn').on('click', function() {
    $(this).toggleClass('open');
  })
  // search-wrap input keyup
  $('.search-wrap input').on('keyup', function() {
    var inputLength = $(this).val().length;
    var clearBtn = $('.search-wrap .clear-btn');
    if(inputLength > 0) {
      clearBtn.show();
    } else {
      clearBtn.hide();
    }
  })
  // search-wrap clear button
  $('.search-wrap .clear-btn').on('click', function() {
    $('.search-wrap input').val('');
    $(this).hide();
  })
  // all-menu open
  $('.all-menu-btn').on('click', function() {
    if($('.search-wrap').hasClass('open')) {
      $('.header').removeClass('bg03');
      $('.search-open-btn').removeClass('open');
      $('.search-wrap').removeClass('open');
    }
    $('.all-menu').show();
    setTimeout(function() {
      $('.all-menu').addClass('open');
    }, 100)
  })
  // all-menu close
  $('.all-menu button').on('click', function() {
    $('.all-menu').removeClass('open');
    setTimeout(function() {
      $('.all-menu').hide();
    }, 600)
  })


  // footer 패밀리사이트 버튼
  $('.family-btn').on('click', function() {
    $(this).toggleClass('open');
    $(this).next().slideToggle();
  })

  $('.sns-list > li > a').on('mouseenter', function() {
    $('.sns-depth').hide();
    $(this).next().show();
  })
  $('.sns-list').on('mouseleave', function() {
    $(this).find('.sns-depth').hide();
  })
  
})