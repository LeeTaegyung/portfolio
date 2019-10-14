$(function() {
  $('.header').addClass('fix');


  $('.agree .check button').on('click', function() {
    $(this).closest('.agree').toggleClass('open');
    $(this).closest('.agree').children('.desc').slideToggle();
  })

  $('.agree-all #agreeAll').on('change', function() {
    $('.agree input').prop('checked', this.checked);
  })

  $('.agree input').on('change', function() {
    if($('.agree input:checked').length >= 3) {
      $('#agreeAll').prop('checked', true);
    } else {
      $('#agreeAll').prop('checked', false);
    }
  })

  $('.msg input').on('blur', function() {
    var inputLength = $(this).val().length;
    var parent = $(this).closest('.msg');
    var phoneInput = $('.phone input');
    var emailInput = $('.email input');

    if(parent.hasClass('phone')) {
      for(var i = 0; i < phoneInput.length; i++) {
        if(phoneInput.eq(0).val().length > 0 && phoneInput.eq(1).val().length > 0) {
          parent.find('.required-msg').hide();
        } else {
          parent.find('.required-msg').show();
        }
      }
    } else if(parent.hasClass('email')) {
      for(var i = 0; i < emailInput.length; i++) {
        if(emailInput.eq(0).val().length > 0 && emailInput.eq(1).val().length > 0) {
          parent.find('.required-msg').hide();
        } else {
          parent.find('.required-msg').show();
        }
      }
    } else {
      if(inputLength == 0) {
        parent.find('.required-msg').show();
      } else {
        parent.find('.required-msg').hide();
      }
    }
  })

  $('.email-select').on('change', function() {
    var selectText = $('#email03 option:selected').text();
    if($(this).val() == 'direct') {
      $('#email02').val('');
      $('#email02').prop('disabled', false);
    } else {
      $('#email02').val(selectText);
      $('#email02').prop('disabled', true);
    }
  })
})