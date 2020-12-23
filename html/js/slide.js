$(function(){

    //같은 플러그인 같은 종류대로 넣기

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows: true,
        dots:true,
        speed:1000
    });

    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
})//