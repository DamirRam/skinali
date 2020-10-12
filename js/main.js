$(window).load(function() {
  $(".before-slider__slide").twentytwenty({
    default_offset_pct: 0.4,
    before_label: 'без скинали', // Set a custom before label
    after_label: 'с скинали'
  });
    $('.before-slider').slick({
      draggable: false,
      swipe: false,
      prevArrow: '<img class="before-slider__prev before-slider__arrow" src="img/before/prev-arrow.png" alt="назад">',
      nextArrow: '<img class="before-slider__next before-slider__arrow" src="img/before/next-arrow.png" alt="вперед">',
      dots: true,
      dotsClass: "before-slider__dots"
    });
});