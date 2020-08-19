class ErrorPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "Page not found!";
    }
  }
  
  customElements.define("error-page", ErrorPage);
  