// var url = "https://jsonplaceholder.typicode.com/todos/1";
// var e = null;
// function kamu(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.responseType = "json";
//   xhr.onload = function (e) {
//     if (this.status == 200) {
//       data = xhr.response;
//       // var data = JSON.parse(xhr.response);
//       console.log("response>>>>>>>>>", data);
//       // return data;

//       // console.log(data["target"]["response"]);
//       // message = e["target"]["response"];
//       // return document.getElementById("satu");
//     } else {
//       console.error("Error!");
//     }
//   };
//   console.log(xhr);
//   xhr.send();
// }

// function loadContent() {
var xhr = new XMLHttpRequest();
var url = "https://api.github.com/users/petanikode";
xhr.response = "json";
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(xhr.responseText);
    console.log("ressss", data);
    const login = "Nama Login :";

    // data.map((row) => {
    //   {
    //     row.login;
    //   }
    // });

    // return data;
    document.getElementById("hasil").innerHTML = this.responseText;
  }
};
xhr.open("GET", url, true);
xhr.send();
//}
class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  
Name AKu
<div id="hasil"></div>
    `;
  }
}

customElements.define("home-page", HomePage);
