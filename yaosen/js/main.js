$(function() {
  $('.toggle-btn').on('click', function(){
    $('#header, .toggle-btn').toggleClass("open");
    $('#sp-menu').fadeToggle();
  })
});