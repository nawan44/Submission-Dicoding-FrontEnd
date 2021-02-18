
// import "../component/page/Error"
// import "../component/page/contact"
// import "../component/page/about-covid"


// const router = [
//   { path: "", page: "home-page" },
//   { path: "about-covid", page: "about-covid" },
//   { path: "contact", page: "contact" }
// ];

// const setPage = () => {
//   const path = window.location.hash.substr(1);
//   const route = router.find((route) => route.path === path) || {
//     page: "error-page"
//   };

//   document.querySelector("route").innerHTML = "";
//   document
//     .querySelector("route")
//     .appendChild(document.createElement(route.page));
// };

// // document.querySelectorAll('[href]').forEach(link => {
// //   link.addEventListener('click', setPage())
// // })

// window.addEventListener("popstate", setPage());
// window.addEventListener("DOMContentLoaded", setPage());
