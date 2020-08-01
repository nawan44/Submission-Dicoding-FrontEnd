// import { LitElement, html, query, PropertyValues } from "lit-element";
// import { RouterSlot } from "@appnest/web-router"
 
// const ROUTES = [
//  {
//    path: "login",
//    component: () => import("./pages/login")
//  },
//  {
//    path: "home",
//    component: () => import("./pages/home")
//  },
//  {
//    path: "**",
//    redirectTo: "home"
//  }
// ];
 
// @customElement("app-component");
// export class AppComponent extends LitElement {
//   @query("router-slot") $routerSlot!: RouterSlot;
 
//   firstUpdated (props: PropertyValues) {
//     super.firstUpdated(props);
//     this.$routerSlot.add(ROUTES);
//   }
 
//   render () {
//     return html`<router-slot></router-slot>`;
//   }
// }
// import "router-slot";

// customElements.whenDefined("router-slot").then(async () => {
//     const routerSlot = document.querySelector("router-slot");
//     await routerSlot.add([
//       {
//         path: "about",
//         component: () => import("./page/about-covid.js") 
//       },
//       {
//         path: "home",
//         component: () => import("../../app.js") 
//       },
//       {
//         path: "**",
//         redirectTo: "home"
//       }
//     ]);
// });



import About from './page/about-covid.js';
import ServicePages from './path/to/services.f7.html';

export default [
  {
    path: '/about/',
    component: About,
  }
//   },
//   {
//     path: '/services/',
//     component: ServicesPages,
//   }
]