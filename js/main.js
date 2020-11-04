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
  //select tag stylization
  let select     = document.querySelector("select");
  let option     = select.children;
  let divText    = document.createElement("span");
  let divSelect  = document.createElement("div");
  let divOptWrap = document.createElement("div");

  select.style.display="none";

  divSelect.setAttribute("class", select.getAttribute("class")+" select");
  divOptWrap.setAttribute("class", "select__wrap");
  for(i=0;i<option.length;i++){
    if(option[i].hasAttribute("selected")){
      divText.innerHTML=option[i].innerHTML;
    }else{
      divText.innerHTML=option[0].innerHTML;
    }
    let spanOption = document.createElement("span");
    spanOption.setAttribute("class", "select__option");
    spanOption.innerHTML = option[i].innerHTML;
    divOptWrap.appendChild(spanOption);
  }
  divSelect.appendChild(divText);
  divSelect.appendChild(divOptWrap);
  select.parentNode.appendChild(divSelect);

  divSelect.onclick=function(){
    divOptWrap.classList.toggle("select__wrap_active");
    divSelect.classList.toggle("on");
  };
  divOptWrap.onclick=function(e){
    divText.innerHTML=e.target.innerHTML;
    select.value=e.target.innerHTML;
  };
});