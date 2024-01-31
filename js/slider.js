let prevArrow = document.getElementById('prevArrow')
let nextArrow = document.getElementById('nextArrow')

$('.swiper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 3000
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });