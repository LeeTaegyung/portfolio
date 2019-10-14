$(function() {
  $('.header').addClass('fix');


  $('.login-wrap .sub-title').on('click', function() {
    $('.login-wrap .sub-title').removeClass('on');
    $(this).addClass('on');
  })

  $('.agree-check button').on('click', function() {
    $('.agree').toggleClass('open');
    $('.login-wrap .agree-desc').slideToggle(300);
  })

  $('.non-member input[type="text"]').on('blur', function() {
    var inputLength = $(this).val().length;
    var parent = $(this).closest('.required');
    var selectInput = $('.login-wrap .select .item input');


    if(parent.hasClass('select')) {
      for(var i = 0; i < selectInput.length; i++) {
        if(selectInput.eq(0).val().length > 0 && selectInput.eq(1).val().length > 0) {
          parent.children('.required-msg').hide();
        } else {
          parent.children('.required-msg').show();
        }
      }
    } else {
      if(inputLength == 0) {
        parent.children('.required-msg').show();
      } else {
        parent.children('.required-msg').hide();
      }
    }
  })

})