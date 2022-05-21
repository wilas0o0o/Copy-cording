$(function() {
  $('.toggle-btn').on('click', function(){
    $('#header, .toggle-btn, #sp-menu').toggleClass("open");
    $('#sp-menu').fadeToggle();
  })
});