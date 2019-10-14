$(function() {
  var flag = true;
  var index = 0;
  var slideCard = $('.portfolio .wrap .card');
  var menuList = $('.portfolio .list li');

  if($(window).width() > 1300) {
    setTimeout(function() {
      $('.profile').addClass('open');
    }, 500);
  }

  slideCard.eq(index).css({'z-index' : '10', 'top' : '0'}).addClass('now');
  
  if($(window).width() <= 1300) {
    $('#wrap').addClass('open');
    flag = false;
    slideCard.eq(0).addClass('active');
    menuList.eq(0).addClass('on');
  }

  // full page
  $(window).on('mousewheel', function(e) {
    var delta = e.originalEvent.wheelDelta/120;
    index = $('.portfolio .wrap .card.now').index();

    if($('#wrap').hasClass('open')) {
      if(delta > 0 && flag == false) {
        // scroll up
        if(index > 0) {
          flag = true;
          index = index - 1;
          menuList.removeClass('on');
          menuList.eq(index).addClass('on');
          slideCard.eq(index).addClass('now').css('z-index','10').animate({ top: '0' }, 700).addClass('active');
          slideCard.eq(index+1).removeClass('now').css('z-index','1').animate({top : '100%'}, 1200, function() {
            flag = false;
          });
        }
      } else if(delta < 0 && flag == false)  {
        // scroll down
        if(slideCard.length > index + 1) {
          flag = true;
          index = index + 1;
          menuList.removeClass('on');
          menuList.eq(index).addClass('on');
          slideCard.eq(index).addClass('now').css('z-index','10').animate({ top: '0' }, 700).addClass('active');
          slideCard.eq(index-1).removeClass('now').css('z-index','1').animate({top : '-100%'}, 1200, function() {
            flag = false;
          });
        }
      }
    } else {
      if($(window).width() > 1300) {
        $('#wrap').addClass('open');
        $('.profile').animate({ width: '20%' }, 1000, function() {
          flag = false;
        });
        slideCard.eq(0).addClass('active');
        menuList.eq(0).addClass('on');
      }
    }
    

  })

  // menu list button click
  $('.portfolio .list button').on('click', function() {
    var thisIndex = $(this).parent().index();
    menuList.removeClass('on');
    menuList.eq(thisIndex).addClass('on');
    if(thisIndex == 0) {
      slideCard.removeClass('now');
      slideCard.eq(thisIndex).css('z-index','10').animate({ top: '0' }, 700).addClass('now').addClass('active');
      for(i = 0; slideCard.length > i; i++) {
        slideCard.eq(i+1).css('z-index','1').animate({top : '100%'}, 1200);
      }
    } else {
      slideCard.removeClass('now');
      slideCard.eq(thisIndex).css('z-index','10').animate({ top: '0' }, 700).addClass('now').addClass('active');
      for(i = 0; slideCard.length > i; i++) {
        if(i == thisIndex) {
          continue;
        } else if(i > thisIndex) {
          slideCard.eq(i).css('z-index','1').animate({top : '100%'}, 1200);
        } else {
          slideCard.eq(i).css('z-index','1').animate({top : '-100%'}, 1200);
        }
      }
    }
  })

  // profile button click
  $('.portfolio .profile-btn').on('click', function() {
    $('.profile').fadeToggle(300);
  })

})