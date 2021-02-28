import  "../../../styles/vaksin.css";

class Vaksin extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="container">   
        <h1 class="title">Vaksin Covid 19</h1>
        <div class="desc">
        Vaksin menyelamatkan jutaan nyawa setiap tahun. Vaksin bekerja dengan melatih dan mempersiapkan pertahanan alami tubuh --- sistem kekebalan --- untuk mengenali dan melawan virus dan bakteri yang mereka targetkan. Setelah vaksinasi, jika nanti tubuh terpapar kuman penyebab penyakit tersebut, maka tubuh segera siap memusnahkannya, mencegah timbulnya penyakit.

        Per 18 Februari 2021, setidaknya tujuh vaksin berbeda di tiga platform telah diluncurkan di berbagai negara. Populasi rentan di semua negara merupakan prioritas tertinggi untuk vaksinasi.
        
        Pada saat yang sama, lebih dari 200 kandidat vaksin tambahan sedang dikembangkan, di mana lebih dari 60 sedang dalam pengembangan klinis. COVAX merupakan bagian dari ACT Accelerator, yang diluncurkan WHO bersama mitranya pada tahun 2020. COVAX, pilar vaksin dari ACT Accelerator, yang diselenggarakan oleh CEPI, Gavi dan WHO, bertujuan untuk mengakhiri fase akut pandemi COVID-19 dengan:
                mempercepat pengembangan vaksin yang aman dan efektif melawan COVID-19;
        mendukung pembangunan kemampuan manufaktur; dan
        bekerja dengan pemerintah dan produsen untuk memastikan alokasi vaksin yang adil dan merata untuk semua negara - satu-satunya inisiatif global untuk melakukannya.
        Vaksin adalah alat baru yang penting dalam memerangi COVID-19 dan sangat menggembirakan melihat begitu banyak vaksin yang terbukti berhasil dan terus dikembangkan. Bekerja secepat mungkin, para ilmuwan dari seluruh dunia berkolaborasi dan berinovasi untuk memberikan kita tes, perawatan dan vaksin yang secara kolektif akan menyelamatkan nyawa dan mengakhiri pandemi ini.
        
        Vaksin yang aman dan efektif akan menjadi pengubah permainan: tetapi di masa mendatang kita harus terus mengenakan masker, menjaga jarak secara fisik dan menghindari keramaian. Menjadi vaksinasi tidak berarti bahwa kita dapat membuang-buang waktu dan membahayakan diri kita sendiri dan orang lain, terutama karena masih belum jelas sejauh mana vaksin dapat melindungi tidak hanya dari penyakit tetapi juga terhadap infeksi dan penularan.
        
        </div>
        <br/>
       
        <br/>
           <p>Source : https://www.who.int/</p>
      </div>`;
  }
}
customElements.define("vaksin-covid", Vaksin);
