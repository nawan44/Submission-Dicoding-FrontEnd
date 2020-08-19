class Contact extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` 
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
        
                <h1 class="display-4">WHO Headquarters in Geneva   </h1>
                <h3>
                </h3>
                
                <p class="lead">
                    Avenue Appia 20 <br />
                    1211 Geneva <br />
                    Telephone: +41-22-7912111<br />
                </p>
                <br/>
                   <p>Source : https://www.who.int/</p>
        </div>
              </div>
               `;

        
    }
    

}
customElements.define("contact", Contact);



