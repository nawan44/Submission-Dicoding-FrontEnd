class AppFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML= `
        <div 
        style="
        background-color:#F8F9FA;
        padding: 10px
        "
        >
        <h5>@nawan44</h5>
        </div>
        `;
    }
}
customElements.define("app-footer", AppFooter);