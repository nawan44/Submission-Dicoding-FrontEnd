
class Tentang extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Coronavirus</h1>
          <h3>Apa itu coronavirus?</h3>
                  <p class="lead">
            Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan menyebabkan penyakit COVID-19.
        </p>
        <br/>
        <hr width="100%">
        <br/>
        <h1 class="display-4">COVID-19</h1>
        <h3>Apa itu COVID-19?</h3>
        
        <p class="lead">
            COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan.  Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan Desember 2019. COVID-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.

        </p>
        <br/>
        <hr>
        <br/>
     
           <p>Source : https://www.who.int/</p>
</div>
      </div>`;

        
    }
    

}
customElements.define("tentang-covid", Tentang);