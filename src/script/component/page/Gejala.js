class Gejala extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
         
        <h1 class="display-4">Gejala COVID-19</h1>
        <h3>Apa saja gejala COVID-19?
        </h3>
        
        <p class="lead">
            Gejala-gejala COVID-19 yang paling umum adalah demam, batuk kering, dan rasa lelah. Gejala lainnya yang lebih jarang dan mungkin dialami beberapa pasien meliputi rasa nyeri dan sakit, hidung tersumbat, sakit kepala, konjungtivitis, sakit tenggorokan, diare, kehilangan indera rasa atau penciuman, ruam pada kulit, atau perubahan warna jari tangan atau kaki. Gejala-gejala yang dialami biasanya bersifat ringan dan muncul secara bertahap. Beberapa orang menjadi terinfeksi tetapi hanya memiliki gejala ringan.

            Sebagian besar (sekitar 80%) orang yang terinfeksi berhasil pulih tanpa perlu perawatan khusus. Sekitar 1 dari 5 orang yang terinfeksi COVID-19 menderita sakit parah dan kesulitan bernapas. Orang-orang lanjut usia (lansia) dan orang-orang dengan kondisi medis penyerta seperti tekanan darah tinggi, gangguan jantung dan paru-paru, diabetes, atau kanker memiliki kemungkinan lebih besar mengalami sakit lebih serius. Namun, siapa pun dapat terinfeksi COVID-19 dan mengalami sakit yang serius. Orang dari segala usia yang mengalami demam dan/atau batuk disertai dengan kesulitan bernapas/sesak napas, nyeri/tekanan dada, atau kehilangan kemampuan berbicara atau bergerak harus segera mencari pertolongan medis. Jika memungkinkan, disarankan untuk menghubungi penyedia layanan kesehatan atau fasilitas kesehatan terlebih dahulu, sehingga pasien dapat diarahkan ke fasilitas kesehatan yang tepat.
        </p>
        <br/>
       
        <br/>
           <p>Source : https://www.who.int/</p>
</div>
      </div>`;
  }
}
customElements.define("gejala-covid", Gejala);
