var $box = $('.box');
var $btnshowHide = $('.btn-show-hide');
var $diamond = $('.diamond')
var $btnmoveIn = $('.btn-move');
var $panel = $('.panel');
var $btncollapse = $('.btn-collapse-expand');
var $circle = $('.circle');
var $btnbounce = $('.btn-bounce');

$btnshowHide.on('click', function () {
  $box.toggleClass('appear');
});

$btnmoveIn.on('click', function () {
  $diamond.toggleClass('move');
});

$btncollapse.on('click', function () {
  $panel.toggleClass('collapse');
});

$btnbounce.on('click', function () {
  $circle.toggleClass('bounce');
});
