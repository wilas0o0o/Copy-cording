$(function() {
  $('.toggle-btn').on('click', function() {
    $('#header').toggleClass('open');
  });

  $('.mask').on('click', function() {
    ('#header').removeClass('open');
  });

  $('.slick-area').slick({
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakPoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});