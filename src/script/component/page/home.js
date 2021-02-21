var xhr = new XMLHttpRequest();
// var url = "https://covid19.mathdro.id/api/confirmed";
var url = "http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi";
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

      document.getElementById("provinsi").innerHTML += 
      jjj[i].provinsi + '<br/>' 
      document.getElementById("kasus").innerHTML += 
      jjj[i].kasus + '<br/> ' 
      document.getElementById("sembuh").innerHTML += 
      jjj[i].sembuh + '<br/> ' 
      document.getElementById("meninggal").innerHTML += 
      jjj[i].meninggal + '<br/> '
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
<h3 class="judul-table">
JUMLAH KASUS COVID-19 di INDONESIA
</h3>
<table class="table">
  <tr>
    <th class="table-th">Nama Provinsi</th>
    <th  class="table-th">Jumlah Kasus</th>
    <th  class="table-th">Jumlah Sembuh</th>
    <th  class="table-th">Jumlah Meninggal</th>
  </tr>
  
  <tr>
    <td  class="table-td"  id="provinsi">
    
    </td>
    <td  class="table-td" id="kasus">

    </td>

    <td  class="table-td" id="sembuh">

    </td>
    <td  class="table-td" id="meninggal">

    </td>
  </tr>
  </table>
    `;
  }
}

customElements.define("home-page", HomePage);
