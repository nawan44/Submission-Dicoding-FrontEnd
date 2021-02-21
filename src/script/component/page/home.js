//style


//GET API
var xhr = new XMLHttpRequest();
var url = "http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi";
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

<h3 class="judul-table" style="color:blue; font-weight: bold;">
JUMLAH KASUS COVID-19 di INDONESIA
</h3>
<table class="table" style="font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;
margin-top:30px;">
  <tr 
  
  >
    <th class="table-th"
    style=" 
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    ">Nama Provinsi</th>
    <th class="table-th"
    style=" 
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    ">Jumlah Kasus</th>
    <th class="table-th"
    style=" 
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    ">Jumlah Sembuh</th>
    <th class="table-th"
    style=" 
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    ">Jumlah Meninggal</th>
  </tr>
  
  <tr
  style=" 
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    "
  >
    <td id="provinsi"
    style=" 
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    "
    >
    </td>
    <td id="kasus"
    style=" 
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    "
    >
    </td>
    <td id="sembuh"
    style=" 
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    "
    >
    </td>
    <td id="meninggal"
    style=" 
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    "
    >
    </td>
  </tr>
  </table>
    `;
  }
}

customElements.define("home-page", HomePage);
