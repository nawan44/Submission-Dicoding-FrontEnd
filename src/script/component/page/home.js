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
  var k = '<tbody>'
    for(i = 0;i < dataJson.length; i++){
        k+= '<tr>';
        k+= '<td style=" border: 1px solid #dddddd; text-align: left;padding: 8px;">' 
      + dataJson[i].provinsi + '</td>';
      k+= '<td style=" border: 1px solid #dddddd; text-align: center;padding: 8px;">' 
      + dataJson[i].kasus + '</td>';
      k+= '<td style=" border: 1px solid #dddddd; text-align: center;padding: 8px;">' 
        + dataJson[i].sembuh + '</td>';
        k+= '<td style=" border: 1px solid #dddddd; text-align: center;padding: 8px;">' 
        + dataJson[i].meninggal + '</td>';

        k+= '</tr>';
    }
    k+='</tbody>';
    document.getElementById('tableData').innerHTML = k;

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
<table id="mytable" style="font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;
margin-top:30px;">
  <thead 
  
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
  </thead>
  
  <tbody id="tableData"></tbody>
  </table>
    `;
  }
}

customElements.define("home-page", HomePage);
