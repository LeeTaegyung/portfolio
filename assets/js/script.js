$(function() {

    setTimeout(function() {
        $('#header').addClass('on');
    }, 1800);

    // 리스트 클릭시 포트폴리오 상세페이지 오픈
    $('.list li button').on('click', function(){
        var dataDetail = $(this).data('detail') || 'blank';
        $('.detail_sec iframe').attr('src', 'detail/' + dataDetail + '.html');
        $('.detail_sec').addClass('open');
        $('.dim').addClass('open');
    })

    // 포트폴리오 상세페이지 닫기
    $('.detail_sec .back_btn, .dim').on('click', function(){
        $('.detail_sec').removeClass('open');
        $('.dim').removeClass('open');
    })

})