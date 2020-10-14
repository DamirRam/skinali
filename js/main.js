$(window).load(function() {
  //before after twenty twenty slider
  $(".before-slider__slide").twentytwenty({
    default_offset_pct: 0.4,
    before_label: 'без скинали', // Set a custom before label
    after_label: 'с скинали'
  });
  //before after slider
  $('.before-slider').slick({
    draggable: false,
    swipe: false,
    prevArrow: '<img class="before-slider__prev before-slider__arrow" src="img/before/prev-arrow.png" alt="назад">',
    nextArrow: '<img class="before-slider__next before-slider__arrow" src="img/before/next-arrow.png" alt="вперед">',
    dots: true,
    dotsClass: "before-slider__dots"
  });
  //menu
  $(".menu-btn").on("click", function (){
    $(".menu").toggleClass("menu_active");
    $(".menu-btn__line").toggleClass("menu-btn__line_active");
  });
});