$(function() {
  // ให้ทำงานเฉพาะ .owl-stage ใน hero slide ตัวแรก
  const $stage = $('.owl-carousel').eq(0).find('.owl-stage');

  let isMouseDown = false;

  $stage.on('mousedown touchstart', function(e) {
    isMouseDown = true;
  });

  $stage.on('mouseup mouseleave touchend', function(e) {
    isMouseDown = false;
  });

  $stage.on('mousemove touchmove', function(e) {
    if (isMouseDown) {
      e.preventDefault();
      return false;
    }
  });
});
