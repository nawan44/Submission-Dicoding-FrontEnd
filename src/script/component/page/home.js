const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.covid19api.com/countries');
xhr.responseType = 'json';
xhr.onload = function(e) {
  if (this.status == 200) {
    // const data = xhr.response;
    var myArr = JSON.parse(this.response);
    myFunction(myArr);
    console.log('response>>>>>>>>>', myArr); // JSON response  

  }
  else {
    console.error('Error!');
}
};
xhr.send();

class HomePage extends HTMLElement{

connectedCallback(){
    this.innerHTML = ` 
Name AKu

    
    `;
    
    }
       
    
    
    
}

customElements.define("home-page", HomePage);