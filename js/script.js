// Siwper JS

let swiperCard = new Swiper(".card-content", {
  loop: false,
  spaceBetween: 30,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },


  breakpoints: {
    600: { slidesPerView: 2 },
    968: { slidesPerView: 3 },
  },
  
});
