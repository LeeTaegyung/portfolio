$(function() {
  
  // 메뉴 open
  $('.nav').on('mouseenter', function() {
    $(this).addClass('open');
  })
  // 메뉴 close
  $('.nav').on('mouseleave', function() {
    $(this).removeClass('open');
  })


  $('.footer .family-btn').on('click', function() {
    $('.family-site').addClass('open');
    return false;
  })
  $('.family-site .close-btn').on('click', function() {
    $('.family-site').removeClass('open');
  })

  


})