var $box = $('.box');
var $btnshowHide = $('.btn-show-hide');
var $diamond = $('.diamond')
var $btnmoveIn = $('.btn-move');

$btnshowHide.on('click', function () {
  $box.toggleClass('appear');
});

$btnmoveIn.on('click', function () {
  $diamond.toggleClass('move');
});
