$( document ).ready( function() {

  var $bg = $('.background');
      $first =  $('h2').eq(0);
      $last = $('h2').eq(1);
      $dev = $('#titleOne');
      $mg = $('#titleTwo');
      $pr = $('#titleThree');
      $div = $('.divider')
      $buttons = $('.button');

  var t1 = new TimelineLite();

  t1.from($bg, 0.8, {opacity: 0})
    .from($first, 0.5, {opacity: 0, y:-50})
    .from($last, 0.5, {opacity: 0, y:-50})
    .from($dev, 0.8, {opacity: 0, x:100})
    .from($mg, 0.8, {opacity: 0, x:100})
    .from($pr, 0.8, {opacity: 0, x:100})
    .from($div, 0.2, {opacity: 0, x:50})
    .staggerFrom($buttons, 0.5, {
      opacity: 0,
      rotationX:90,
      transformOrigin:"center top",
      ease:Back.eastOut
    }, 0.2, "buttons")

})
