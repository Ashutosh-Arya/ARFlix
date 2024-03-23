// ------------------------------- HEADER -------------------------
const searchBox = document.querySelector(".search-box");
const searchToggler = document.querySelectorAll(".search-toggler");

for (let i = 0; i < searchToggler.length; i++) {
  searchToggler[i].addEventListener("click", () => {
    searchBox.classList.toggle("active");
  });
}

// ----------------------- SIDEBAR ------------------------------
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const body = document.body;

menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("active");
});

// --------------------------- BANNER VIDEO TRAILER ---------------------------
function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");
  video.pause();
  trailer.classList.toggle("active");
}

// ----------------------------------- BANNER IMAGE ------------------------------
function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");
  banner.style.background = `url("../Img/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";
  banner.style.backgroundRepeat = "no-repeat";


  contents.forEach((content) => {
    content.classList.remove("active");
    if(content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}


// -------------------------------- CAROUSEL ---------------------------------------------

$(document).ready(function () {
  $(".carousel").carousel();
});

// ------------------------------------- END -----------------------------------------------