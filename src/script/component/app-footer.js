class AppFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML= `<h2>@nawan44</h2>`;
    }
}
customElements.define("app-footer", AppFooter);