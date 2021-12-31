$(function() {

  $('.pipe-line .pipe-list02 li').addClass('select');


  $('.check-wrap input[type="checkbox"]').on('change', function() {
    var checkNow = $(this).attr('id');
    var stringCut = checkNow.substring(5,checkNow.length);
    var stringLower = stringCut.toLowerCase();
    var checkState = $(this).is(":checked");
    var pipeList = $('.pipe-line .pipe-list02 li')

    if(checkNow == 'checkAll') {
      if(checkState) {
        $('.check-wrap input[type="checkbox"]').prop('checked', false);
        $(this).prop('checked', true);
        pipeList.addClass('select');
      } else {
        pipeList.removeClass('select');
      }
    } else {
      if(checkState) {
        if($('#checkAll').is(':checked')) {
          pipeList.removeClass('select');
          $('#checkAll').prop('checked', false);
        }
        $(this).prop('checked', true);
        $('.' + stringLower).addClass('select');
      } else {
        $('.' + stringLower).removeClass('select');
      }
    }

  })


  // 팝업창 열기
  $('.pipe-content').on('click', function() {
    var clickLink = $(this).parent('li');
    if(clickLink.hasClass('select') && !(clickLink.hasClass('no-rink'))) {
      $('.pop-wrap').addClass('open');
      $('body').css('overflow-y','hidden');
    }
    return false;
  })
  // 팝업창 닫기
  $('.pop-box .close-btn, .pop-box .close-icon').on('click', function() {
    $('.pop-wrap').removeClass('open');
    $('body').css('overflow-y','auto');
  })
  // 팝업창 영역 외 클릭시 닫기
  $('.pop-wrap').on('click', function(e) {
    if($(e.target).hasClass('pop-wrap')) {
      $('.pop-wrap').removeClass('open');
      $('body').css('overflow-y','auto');
    }
  })

})