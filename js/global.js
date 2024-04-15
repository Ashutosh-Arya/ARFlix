// ------------------------------- HEADER -------------------------
// add event on multiple element 

const addEventOnElements = function (elements,eventType,callback){
  for(const elem of elements) elem.addEventListener(eventType,callback);
}

// toggle search box in mob device 

const searchTogglers = document.querySelectorAll(".search-toggler");

// Callback function to toggle search box
const toggleSearchBox = () => {
    document.querySelector(".search-box").classList.toggle("active");
};

// Adding event listener to searchTogglers
addEventOnElements(searchTogglers, "click", toggleSearchBox);

