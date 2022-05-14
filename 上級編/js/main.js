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

  // "#"で始まるリンクをクリックしたときに実行
  $('a[href^="#"]').on('click', function() {
    // thisのhref属性の値をhrefに代入
    var href = $(this).attr('href');
    // href = "#" or ""が真の時htmlを、偽の時hrefをtargetに代入
    var target = $(href == '#' || href == "" ? 'html' : href);
    // ドキュメントの左上からtargetの左上までの距離をpositionに代入
    var position = target.offset().top;
    // animate関数で移動
    $('html, body').animate({
      scrollTop:position
    }, 600, "swing");
    // 処理を中断
    return false;
  });

  // 要素に対してslickを起動
  $('.slick-area').slick({
    arrows: false,          // 矢印の指定
    centerMode: true,       // 前後の画像が見える機能
    centerPadding: '100px', // 前後の画像の見える範囲を指定
    slidesToShow: 3,        // 表示するスライド数
    responsive: [           // レスポンシブ時の機能を追加
      {
        breakpoint: 768,    // ブレイクポイントの指定
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(window).scroll(function(){
    $('.fadein').each(function(){
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity', '1')
        $(this).css('transform', 'translateY(0)')
      }
    });
  });
});