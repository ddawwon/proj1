$(function(){

    //popup
    $('#top_popup .close').click(function(){
        $('#top_popup').slideUp(500);
    })

    //quick_btn
    //퀵메뉴 안보였다, 나타났다, 안보였다
    $(window).scroll(function(){
        if($(document).scrollTop() >= 500 && $(document).scrollTop()  <= $('#footer').offset().top - 1400) {
           $('#quick_btn').fadeIn(200);
       }else { $('#quick_btn').fadeOut(200);}
    })

    //공지사항 자동넘어감
    //sec2
    var slide_box1;
          slide_box1 = setInterval(function(){
              $('.slide_box1 .notice_list > li:first-child').animate({
                  'margin-top':'-3em'},600,function(){
                      $('.slide_box1 .notice_list').append(
                          $('.slide_box1 .notice_list > li:first-child'));
                      $('.slide_box1 .notice_list > li:last-child').css(
                          'margin-top',0);
                  });
          },2000);

          var slide_box2;
          slide_box2 = setInterval(function(){
              $('.slide_box2 .notice_list > li:first-child').animate({
                  'margin-top':'-3em'},600,function(){
                      $('.slide_box2 .notice_list').append(
                          $('.slide_box2 .notice_list > li:first-child'));
                      $('.slide_box2 .notice_list > li:last-child').css(
                          'margin-top',0);
                  });
          },2000);    
          
          
        
    //네비버튼
    //slider
    $('#nav_pop_btn').click(function(){
        $('#nav_pop').fadeIn();
    })
    $('.btn_all').click(function(){
        $('#nav_pop').fadeOut();
    })

    //sec2 엑스버튼
    $('.btn_all1').click(function(){
        $('.slide_box1').fadeOut();
    })

    $('.btn_all2').click(function(){
        $('.slide_box2').fadeOut();
    })

})//