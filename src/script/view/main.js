import "@appnest/web-router";

// import AboutCovid from '../component/page/about-covid.js'
// import "https://unpkg.com/router-slot?module";
class Main extends HTMLElement {
  constructor () {
    super();
    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(document.createTextNode("🎁 This is a custom element!"));
  }
}

customElements.define("main", Main);

// Setup the router
const routerSlot = document.querySelector("router-slot");
routerSlot.add([
  {
    path: "about-covid",
    // Load a web component
    component: AboutCovid
  },
//   {
//     path: "home",
//     component: () => {
//       // Manually create the home Main 
//       const $div = document.createElement("div");
//       $div.innerText = `🏠 This is the home Main!`;
//       return $div;
//     }
//   },
  //   {
  //   path: "about",
  //   component: () => {
  //     // Manually create the settings Main 
  //     const $div = document.createElement("div");
  //     $div.innerText = `⚙️ This is the settings Main!`;
  //     return $div;
  //   }
  //  },
  {
    path: "**",
    redirectTo: "home"
  }
]);