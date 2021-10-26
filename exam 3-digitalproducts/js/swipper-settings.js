var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});



var x = document.getElementsByClassName("section");

  for(var i = 0; i < x.length; i++) {

var el = x[i];

var swiper = el.getElementsByClassName("swiper-container1")[0];
var nx = el.getElementsByClassName("swiper-button-next")[0];
var pr = el.getElementsByClassName("swiper-button-prev")[0];
var pag = el.getElementsByClassName("swiper-pagination")[0];

new Swiper(swiper, {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop          : true,
  centeredSlides: true,
  keyboard      : true,
  navigation: {
    nextEl : nx,
    prevEl : pr
  },
  pagination: {
    el: pag
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      width: 630,
      slidesPerView: 2,
      spaceBetween: 10,
      slidesOffsetBefore: 170,
    },
    800: {
      width: 690,
      slidesPerView: 2,
      spaceBetween: 10,
      slidesOffsetBefore: 180,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
})
}

function toggleMenu(e) {
  e.preventDefault(); 
  document.body.classList.toggle ('menu-opened')}


  
