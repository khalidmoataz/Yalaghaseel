(function($) {
  "use strict";
  var
    owl = $('.owl-carousel');


  owl.owlCarousel({
    loop: false,
    margin: 10,
    loop: true,
    responsiveClass: true,
    dots: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })



})(jQuery);
