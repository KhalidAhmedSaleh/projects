const navInfo = document.querySelector(".nav-info");
const navBtn = document.querySelector(".nav-btn");

const closeNav = document.querySelector(".close");

const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");

const closeNavbar = function () {
  navInfo.classList.add("hidden");
  navInfo.classList.remove("show-nav");
  navbar.classList.remove("overlay");
};

navBtn.addEventListener("click", function () {
  navInfo.classList.remove("hidden");
  navInfo.classList.add("show-nav");
  navbar.classList.add("overlay");
});

closeNav.addEventListener("click", closeNavbar);
