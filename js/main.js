var $box = $('.box');
var $btnshowHide = $('.btn-show-hide');

$btnshowHide.on('click', function () {
  $box.toggleClass('appear');
});
