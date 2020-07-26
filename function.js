$(document).ready(function(){
    $('.sec2_slider').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        cssEase: 'linear'
    });
  });