$(function(){
  var col = $('.column');

  col.focus(function(){
    var _this = $(this);
    _this.addClass('open');
  });

  col.blur(function(){
    var _this = $(this);
    _this.removeClass('open');
  });
});
