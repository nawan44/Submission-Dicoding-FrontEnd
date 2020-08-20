class HomePage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      "Home page"
      
      
      
      ;


    }
  }
  
  customElements.define("home-page", HomePage);