// Swiper js

var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// NAVBAR FOR mobile
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
function toggle() {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}
