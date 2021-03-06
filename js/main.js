$(window).load(function() {
  //closest
  !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
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
  //jquery masked input
  jQuery(function($){
     $("input[type='tel']").mask("+7(999) 999-99-99");
  });
  //плавная прокрутка до якоря
  $("a[href*='#']").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top-190
    }, 777);
    e.preventDefault();
    return false;
  });
  //модальные окна
  //отключение прокрутки при всплытии модального окна
  const body   = document.body;
  const header = document.querySelector("header");
  let offsetTop;

  function noScroll (modal) {
    offsetTop          = window.pageYOffset;
    let scrollBarWidth = window.innerWidth-body.offsetWidth;
    
    header.style.right = scrollBarWidth+"px";
    modal.style.overflowY ="scroll";
    body.style.overflowY = "hidden";
    body.style.top = "-"+offsetTop+"px";
    body.style.right = scrollBarWidth+"px";
    body.style.position = "fixed";
  };

  function scroll (modal) {
    let scrollBarWidth = window.innerWidth-body.offsetWidth;
    
    header.style.right = 0+"px";
    modal.style.overflowY="hidden"
    body.style.position = "static";
    body.style.right = "0px";
    body.style.overflowY ="scroll";
    window.scroll(0, offsetTop);

  };
  //throttle
  function throttle(fn, interval) {
    let lastTime;
    return function throttled() {
        let timeSinceLastExecution = Date.now() - lastTime;
        if(!lastTime || (timeSinceLastExecution >= interval)) {
            fn.apply(this, arguments);
            lastTime = Date.now();
        }
    };
};

  //открытие и закрытие модальных окон
  let openBtns   = document.querySelectorAll(".js-open-modal");
  let closeBtns  = document.querySelectorAll(".js-close-modal");
  let closeModal = document.querySelectorAll(".modal");
  let modalContent = document.querySelectorAll(".modal__content");
  let modalAnimationTime = 250;

  let animOpen = throttle(function animationOpen(time, modalObj) {
  let opacity = 0;

  let interval = setInterval (function (){
    modalObj.classList.add("modal_active");
    opacity += 0.04;
    modalObj.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(interval);
      modalObj.style.opacity = 1;
    }
  }, time/25);//end setInterval
}, modalAnimationTime);//end throttle

let animClose = throttle(function animationClose (time, modalObj) {
  let opacity = 1;

  let interval = setInterval (function () {
    opacity -= 0.04;
    modalObj.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(interval);
      modalObj.style.opacity = 0;
      modalObj.classList.remove("modal_active");
    };
  }, time/25);//end setInterval
}, modalAnimationTime);//end throttle

    for(let i=0; i<openBtns.length; i++){
        openBtns[i].addEventListener("click", function (event) {
          event.preventDefault();
          let modalId = this.getAttribute("data-modal");
          let modal   = document.querySelector(".modal[data-modal='"+modalId+"']");
          animOpen(modalAnimationTime, modal);
          noScroll(modal);
        });//end addEventListener
    };//end for

  for(let i=0; i<closeBtns.length; i++){
    closeBtns[i].addEventListener("click", function (event) {
      let modal = this.closest(".modal");
      animClose(modalAnimationTime, modal);
      scroll(modal);
    });//end addEventListener
  };

  for(let i=0; i<closeModal.length; i++){
    closeModal[i].addEventListener("click", function (event) {
      let modal = this.closest(".modal");
      animClose(modalAnimationTime, modal);
      scroll(modal);
    }, false);//end addEventListener
  };

  for(let i=0; i<modalContent.length; i++){
    modalContent[i].addEventListener("click", function (event) {
      event.stopPropagation();
    });//end addEventListener
  };

  // отключение анимации кнопки internet explorer
  let buttons = document.querySelectorAll("button");
  for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("mousedown", function (event){
    event.preventDefault();
  });//end addEventListener
  }//end for

// загрузка карты, когда до нее докрутили
  function map() {
    const map = document.querySelector("#map");
    let offsetTop = map.offsetTop;
    window.addEventListener("scroll", loadMap, false);
    function loadMap() {
      if(window.pageYOffset>offsetTop-2000) {
        map.firstElementChild.setAttribute("src", 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa178798c51e577a8c8d62d1ffe70f2428de9b8bd69ebd5881ad8bb3d7baec834&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false');
        window.removeEventListener("scroll", loadMap, false);
      }
    }
  }
  map();

});