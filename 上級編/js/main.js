$(function() {
  $('.toggle-btn').on('click', function() {
    $('#header').toggleClass('open');
  });

  $('.mask').on('click', function() {
    $('#header').removeClass('open');
  });

  $('.nav-item, .nav-item a').on('click', function() {
    $('#header').removeClass('open');
  });

  $('a[href^="#"]').on('click', function() {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({
      WWWscrollTop:position
    }, 600, "swing"
    );
    return false;
  });

  $('.slick-area').slick({
    arrows: false,
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