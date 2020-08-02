/**
 * This is the playground for https://github.com/andreasbm/web-router
 * web-router is a powerful web component router.
 */
import "https://unpkg.com/router-slot?module";
import "@appnest/web-router";


// Define a web component
class AppRoute extends HTMLElement {
  constructor () {
    super();
    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(document.createTextNode("🎁 This is a custom element!"));
  }
}

customElements.define("app-route", AppRoute);

// Setup the router
const routerSlot = document.querySelector("router-slot");
routerSlot.add([
  {
    path: "page/about",
    // Load a web component
    component: AboutCovid
  },
  // {
  //   path: "home",
  //   component: () => {
  //     // Manually create the home page 
  //     const $div = document.createElement("div");
  //     $div.innerText = `🏠 This is the home page!`;
  //     return $div;
  //   }
  // },
  //   {
  //   path: "settings",
  //   component: () => {
  //     // Manually create the settings page 
  //     const $div = document.createElement("div");
  //     $div.innerText = `⚙️ This is the settings page!`;
  //     return $div;
  //   }
  // },
  {
    path: "**",
    redirectTo: "home"
  }
]);