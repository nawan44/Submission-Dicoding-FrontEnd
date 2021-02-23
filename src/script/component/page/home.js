function harijamini() {
  var d = new Date(),
    minutes =
      d.getMinutes().toString().length == 1
        ? "0" + d.getMinutes()
        : d.getMinutes(),
    hours =
      d.getHours().toString().length == 1 ? "0" + d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? "pm" : "am",
    months = [
      "Januari",
      "Febuari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return (
    days[d.getDay()] +
    " ,  " +
    d.getDate() +
    " " +
    months[d.getMonth()] +
    " " +
    d.getFullYear() +
    "  Jam : " +
    hours +
    ":" +
    minutes +
    ampm
  );
}

//GET API
var xhr = new XMLHttpRequest();
var url = "http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi";
xhr.response = "json";
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const dataJson = JSON.parse(this.responseText);
    const dataJ = this.responseText;
    // console.log(dataJ)

    function zzz() {
      var k = "<tbody>";

      for (i = 0; i < dataJson.length; i++) {
        for (j = 1; j < dataJson.length; i++) {
          // console.log(j)
          k += "<tr>";
          k +=
            '<td style=" border: 1px solid #dddddd; text-align: center;padding: 8px;">' +
            j++ +
            "</td>";
          k +=
            '<td style=" border: 1px solid #dddddd; text-align: left;padding: 8px;">' +
            dataJson[i].provinsi +
            "</td>";
          k +=
            '<td style=" border: 1px solid #dddddd; text-align: right;padding: 8px;">' +
            dataJson[i].kasus.toLocaleString("id") +
            "</td>";
          k +=
            '<td style=" border: 1px solid #dddddd; text-align: right;padding: 8px;">' +
            dataJson[i].sembuh.toLocaleString("id") +
            "</td>";
          k +=
            '<td style=" border: 1px solid #dddddd; text-align: right;padding: 8px;">' +
            dataJson[i].meninggal.toLocaleString("id") +
            "</td>";
          k += "</tr>";
        }
      }
      k += "</tbody>";
      document.getElementById("tableData").innerHTML = k;
      document.getElementById("hariini").innerHTML = harijamini();
    }
    zzz();
  }
};
xhr.open("GET", url, true);
xhr.send();

class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  

<h3 class="judul-table" style="color:blue; font-weight: bold;">
JUMLAH KASUS COVID-19 di INDONESIA</h3>
<div style="color:red; margin: 20px; font-weight: bold;">Data hari ini : <span id="hariini"></span></div>

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
  ">No</th>
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
