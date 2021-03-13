class Contact extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` 
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        
        <h3 class="display-4">WHO Headquarters in Geneva   </h3>
        
        
        <p class="lead">
            Avenue Appia 20 <br />
            1211 Geneva <br />
            Telephone: +41-22-7912111<br />
        </p>
        <br/>
           <p>Source : https://www.who.int/</p>
        </div>
<br/>
        <div class="container">
        
        <h3 class="display-4">Ministry of Health of the Republic of Indonesia </h3>
      
        
        <p class="lead">
        Gedung Sujudi, H. R. Rasuna Said Street No.Kav 4 - 9, Kuningan, South Jakarta City<br />
        Jakarta 12950 <br />
            Telephone: + 62 21 5265043<br />
        </p>
        <br/>
           <p>Source : https://kemkes.go.id/</p>
        </div>


        </div>
               `;

        
    }
    

}
customElements.define("contact-page", Contact);



