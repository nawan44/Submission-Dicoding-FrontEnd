// import service from '../../data/service' 
//import { data } from 'jquery';
// import api from '../../data/api'

class HomePage extends HTMLElement {

    connectedCallback() {
        const baseUrl = "https://api.covid19api.com";

        const getData = async () => {
            try {
                const response = await fetch(`${baseUrl}/list`);
                const responseJson = await response.json();
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderData(responseJson.datas);
                }
            } catch (error) {
                showResponseMessage(error);
            }
        };

        const showResponseMessage = (message = "Check your internet connection") => {
            alert(message);
        };
        const renderData = (datas) => {
            // datas.forEach(data => {
            this.innerHTML = `
        
        <table class="table table-striped">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">CountryCode</th>
            <th scope="col">Date</th>
            <th scope="col">New Confirmed</th>
            <th scope="col">New Deaths</th>
            <th scope="col">New Recovered</th>
            <th scope="col">Slug</th>
            <th scope="col">Total Confirmed</th>
            <th scope="col">Total Deaths</th>
            <th scope="col">Total Recovered</th>
          </tr>
        </thead>
        <tbody>
                <tr>
                      <td>${renderData.Country}</td>
                      <td>${renderData.CountryCode}</td>
                      <td>${renderData.Date}</td>
                      <td>${renderData.NewConfirmed}</td>
                      <td>${renderData.NewDeaths}</td>
                      <td>${renderData.NewRecovered}</td>
                      <td>${renderData.Slug}</td>
                      <td>${renderData.TotalConfirmed}</td>
                      <td>${renderData.TotalDeaths}</td>
                      <td>${renderData.TotalRecovered}</td>
                  </tr>    
        </tbody>
      </table>

        `
            //  });
        }
        getData();
    }
}

customElements.define("home-page", HomePage);

// var xhr = new XMLHttpRequest(); var url = "https://api.covid19api.com";
// xhr.onloadstart = function () {
// document.getElementById("button").innerHTML = "Loading..."; } xhr.onerror =
// function () {     alert("Gagal mengambil data"); };  xhr.onloadend = function
// () {      if (this.responseText !== "") {          var data =
// JSON.parse(this.responseText);          var name =
// document.createElement("h5");          name.innerHTML = data.name;
// document.getElementById("hasil").append(img, name);
// document.getElementById("button").innerHTML = "Done";
// setTimeout(function () {
// document.getElementById("button").innerHTML = "Load Lagi";          }, 3000);
// }  }; xhr.open("GET", url, true); xhr.send();