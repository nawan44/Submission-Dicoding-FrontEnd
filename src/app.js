import "./script/component/com-carousel.js";
import "./script/component/app-navbar.js";
import "./script/component/app-footer.js";
import "./script/component/page/about-covid.js";
import "./script/component/page/Error.js";

import "./styles/style.css";
import main from "./script/view/main.js";




// document.addEventListener("DOMContentLoaded", main);


const router = [
    { path: "", page: "home-page" },
    { path: "about-covid", page: "about-covid" },
    { path: "contact", page: "contact" }
  ];
  
  const setPage = () => {
    const path = window.location.hash.substr(1);
    const route = router.find((route) => route.path === path) || {
      page: "error-page"
    };
  
    document.querySelector("main").innerHTML = "";
    document
      .querySelector("main")
      .appendChild(document.createElement(route.page));
  };
  
  // document.querySelectorAll('[href]').forEach(link => {
  //   link.addEventListener('click', setPage())
  // })
  
  window.addEventListener("popstate", setPage());
  window.addEventListener("DOMContentLoaded", setPage());
  