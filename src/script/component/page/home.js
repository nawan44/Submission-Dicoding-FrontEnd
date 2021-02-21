var xhr = new XMLHttpRequest();
var url = "https://covid19.mathdro.id/api/confirmed";
// var url = "https://data.covid19.go.id/public/api/prov.json";
// var url = "https://indonesia-covid-19.mathdro.id/api/provinsi/";
// var url = "https://api.covid19api.com/countries";

xhr.response = "json";
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
const dataJson =JSON.parse( this.responseText);
  const dataJ =this.responseText
  console.log(dataJ)


var jjj = JSON.parse(dataJ)
function zzz() {
  for (i = 0; i < jjj.length; i++) { 
      document.getElementById("user").innerHTML += 
      jjj[i].countryRegion + '<br/>' 

      document.getElementById("id").innerHTML += 
      jjj[i].confirmed + '<br/>' 
      document.getElementById("title").innerHTML += 
      jjj[i].deaths + '<br/>'
  }
}
zzz();



  }
};
xhr.open("GET", url, true);
xhr.send();
//}
class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  

<div class="nama">Name AKu</div>
<table class="table">
  <tr>
    <th class="table-th">Company</th>
    <th  class="table-th">Contact</th>
    <th  class="table-th">Country</th>
  </tr>
  
  <tr>
    <td  class="table-td"  id="user">
    
    </td>
    <td  class="table-td" id="id">

    </td>
    <td  class="table-td" id="title">

    </td>
  </tr>
  </table>
    `;
  }
}

customElements.define("home-page", HomePage);
