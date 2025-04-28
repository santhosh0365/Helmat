(function ($) {
  "use strict";
  var initJarallax = function () {
  jarallax(document.querySelectorAll(".jarallax"));
  jarallax(document.querySelectorAll(".jarallax-img"), {
  keepImg: true,
  });
  }
  var initProductQty = function(){
  $('.product-qty').each(function(){
  var $el_product = $(this);
  var quantity = 0;
  $el_product.find('.quantity-right-plus').click(function(e){
  e.preventDefault();
  var quantity = parseInt($el_product.find('.quantity').val());
  $el_product.find('.quantity').val(quantity + 1);
  });
  $el_product.find('.quantity-left-minus').click(function(e){
  e.preventDefault();
  var quantity = parseInt($el_product.find('.quantity').val());
  if(quantity>0){
  $el_product.find('.quantity').val(quantity - 1);
  }
  });
  });
  }
  var initChocolat = function () {
  Chocolat(document.querySelectorAll('.image-link'), {
  imageSize: 'contain',
  loop: true,
  })
  }
  var initTextFx = function () {
  $('.txt-fx').each(function () {
  var newstr = '';
  var count = 0;
  var delay = 0;
  var stagger = 10;
  var words = this.textContent.split(/\s/);
  $.each( words, function( key, value ) {
  newstr += '<span class="word">';
  for ( var i = 0, l = value.length; i < l; i++ ) {
  newstr += "<span class='letter' style='transition-delay:"+ ( delay + stagger * count ) +"ms;'>"+ value[ i ] +"</span>";
  count++;
  }
  newstr += '</span>';
  newstr += "<span class='letter' style='transition-delay:"+ delay +"ms;'>&nbsp;</span>";
  count++;
  });
  this.innerHTML = newstr;
  });
  }
  $(document).ready(function () {
  initProductQty();
  initJarallax();
  initChocolat();
  initTextFx();
  $(".user-items .search-item").click(function () {
  $(".search-box").toggleClass('active');
  $(".search-box .search-input").focus();
  });
  $(".close-button").click(function () {
  $(".search-box").toggleClass('active');
  });
  var breakpoint = window.matchMedia('(max-width:61.93rem)');
  if (breakpoint.matches === false) {
  var swiper = new Swiper(".main-swiper", {
  slidesPerView: 1,
  spaceBetween: 48,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  breakpoints: {
  900: {
  slidesPerView: 2,
  spaceBetween: 48,
  },
  },
  });
  var swiper = new Swiper(".thumb-swiper", {
  direction: 'horizontal',
  slidesPerView: 6,
  spaceBetween: 6,
  breakpoints: {
  900: {
  direction: 'vertical',
  spaceBetween: 6,
  },
  },
  });
  var swiper2 = new Swiper(".large-swiper", {
  spaceBetween: 48,
  effect: 'fade',
  slidesPerView: 1,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  thumbs: {
  swiper: swiper,
  },
  });
  }
  var thumb_slider = new Swiper(".product-thumbnail-slider", {
  slidesPerView: 5,
  spaceBetween: 10,
  direction: "vertical",
  breakpoints: {
  0: {
  direction: "horizontal"
  },
  992: {
  direction: "vertical"
  },
  },
  });
  var large_slider = new Swiper(".product-large-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  thumbs: {
  swiper: thumb_slider,
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  });
  }); 
  $(window).load(function(){
  $('.preloader').fadeOut();
  });
  })(jQuery);
const video = document.getElementById('video');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
      video.play();
    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.7
});
observer.observe(video);