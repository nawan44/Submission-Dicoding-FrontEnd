class CountriesPage extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` 
        Countries
               `;

        
    }
    

}
customElements.define("countries-page", CountriesPage);



