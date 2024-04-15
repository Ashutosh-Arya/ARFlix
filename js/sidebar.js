import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar() {
  const genreList = {};
  fetchDataFromServer(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
    function (data) {
      data.genres.forEach((genre) => {
        genreList[genre.id] = genre.name;
      });

      console.log(genreList);
      genrerateGenreLinks();
    }
  );

  const sidebarInner = document.createElement("div");
  sidebarInner.classList.add("sidebar-inner");

  sidebarInner.innerHTML = ` <div class="sidebar-list">
      <p class="title">Genre</p>
    </div>

    <div class="sidebar-list">
      <p class="title">Language</p>

      <a href="./movie-list.html" class="sidebar-link">English</a>

      <a href="./movie-list.html" class="sidebar-link">Hindi</a>

      <a href="./movie-list.html" class="sidebar-link">Marathi</a>

      <a href="./movie-list.html" class="sidebar-link">Tamil</a>

      <a href="./movie-list.html" class="sidebar-link">Telugu</a>

      <a href="./movie-list.html" class="sidebar-link">Bengali</a>
    </div>

    <div class="sidebar-footer">
      <p class="copyright">Copyright @2024</p>
      <a href="https://www.themoviedb.org/">
        <img src="./Img/H.png" alt="" width="120" height="18" />
      </a>
    </div>`;

  const genrerateGenreLinks = function () {
    // const sidebarList = document.querySelector(".sidebar-list");

    // Loop through genreList and create links
    Object.entries(genreList).forEach(([genreId, genreName]) => {
      const link = document.createElement("a");
      link.classList.add("sidebar-link");
      link.setAttribute("href", "/movie-list.html");
      link.setAttribute("menu-close", "");

      link.textContent = genreName;
      sidebarInner.querySelectorAll(".sidebar-list")[0].appendChild(link);
    });
    const sidebar = document.querySelector("[sidebar]");
    sidebar.appendChild(sidebarInner);
    toggleSidebar(sidebar);
  };

  const toggleSidebar = function (sidebar) {
    // toggle sidebar for mobile

    const sidebarBtn = document.querySelector("[menu-btn]");
    const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
    const sidebarClose = document.querySelectorAll("[menu-close]");
    const overlay = document.querySelector("[overlay]");


    addEventOnElements(sidebarTogglers,"click",function(){
        sidebar.classList.toggle("active");
        sidebarBtn.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    addEventOnElements(sidebarClose,"click",function(){
        sidebar.classList.remove("active");
        sidebarBtn.classList.remove("active");
        overlay.classList.remove("active");

    })
  };
}
