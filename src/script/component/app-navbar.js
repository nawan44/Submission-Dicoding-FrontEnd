
class AppNavbar extends HTMLElement{
    connectedCallback(){
        this.render();

        
    }


    render(){

        this.innerHTML=  `  
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <a class="navbar-brand" href="#">Covid -19</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-covid">About Covid</a>
            </li>

          </ul>
          <span >
          <a class="nav-link" href="#contact-page">Contact</a>
          
          </span>
        </div>
      </nav>`;
    }
}
customElements.define("app-navbar", AppNavbar);

