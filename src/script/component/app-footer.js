import  "../../styles/appfooter.css";

class AppFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML= `
        <div class="app-footer" >
        <h5>@nawan44</h5>
        </div>
        `;
    }
}
customElements.define("app-footer", AppFooter);