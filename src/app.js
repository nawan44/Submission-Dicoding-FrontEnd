import "./script/component/com-carousel.js";
import "./script/component/app-navbar.js";
import "./script/component/app-footer.js";
// import "regenerator-runtime";
import "./styles/style.css";
// import "./script/component/app-bar.js";
import main from "./script/view/main.js";
// import "router-slot";

customElements.whenDefined("router-slot").then(async () => {
    const routerSlot = document.querySelector("router-slot");
    await routerSlot.add([
      {
        path: "about",
        component: () => import("../src/script/component/page/about-covid.js") 
      }
    ]);
});



document.addEventListener("DOMContentLoaded", main);