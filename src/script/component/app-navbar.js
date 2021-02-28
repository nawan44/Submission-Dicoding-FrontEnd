// import navbar from "../../styles/appnavbar.css";
import  "../../styles/appnavbar.css";

class AppNavbar extends HTMLElement {
  // constructor() {
  //   super();
  //   // shadow dom
  //   const shadowDOM = this.attachShadow({ mode: 'open' });

  //   // Render the template
  //   shadowDOM.appendChild(template.content.cloneNode(true));

  //   var elems = shadowDOM.querySelectorAll('nav-link');
  //   var instances = M.FormSelect.init(elems, []); //example of select init
  // }

  connectedCallback() {
    this.render(

    );
  }
  ;

  render() {

    this.innerHTML = `  
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:#E8ECEF;" >
        <a class="navbar-brand"  onclick="setTimeout(location.reload.bind(location), 1)" href="#" style="color:blue; font-weight:bold; font-size:25px">Covid -19</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a  onclick="setTimeout(location.reload.bind(location), 1)" class="nav-link" href="#" >Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a  onclick="setTimeout(location.reload.bind(location), 1)" class="nav-link" href="#tentang-covid">Apa itu Covid-19 ?</a>
            </li>
            <li class="nav-item">
            <a  onclick="setTimeout(location.reload.bind(location), 1)" class="nav-link" href="#gejala-covid">Gejala Covid</a>
          </li>
          <li class="nav-item">
          <a  onclick="setTimeout(location.reload.bind(location), 1)" class="nav-link" href="#penularan-covid">Penularan Covid</a>
        </li>
        <li class="nav-item">
        <a  onclick="setTimeout(location.reload.bind(location), 1)" class="nav-link" href="#vaksin-covid">Vaksin Covid</a>
      </li>
          </ul>
          <span >
          <a  onclick="setTimeout(location.reload.bind(location), 1)" class="nav-link" href="#contact-page">Contact</a>
          
          </span>
        </div>
      </nav>`;
  }
}
customElements.define("app-navbar", AppNavbar);
