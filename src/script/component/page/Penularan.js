const css = window.document.styleSheets[0];
css.insertRule(
  `
  .lead{
    
    color: blue;
  }
`,
  css.cssRules.length
);
class Penularan extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 class="display-4">Cara Menyebar</h1>
        <h3>Bagaimana cara COVID-19 menyebar?
        </h3>
        <p class="lead">
            Orang dapat tertular COVID-19 dari orang lain yang terinfeksi virus ini. COVID-19 dapat menyebar terutama dari orang ke orang melalui percikan-percikan dari hidung atau mulut yang keluar saat orang yang terinfeksi COVID-19 batuk, bersin atau berbicara. Percikan-percikan ini relatif berat, perjalanannya tidak jauh dan jatuh ke tanah dengan cepat. Orang dapat terinfeksi COVID-19 jika menghirup percikan orang yang terinfeksi virus ini. Oleh karena itu, penting bagi kita untuk menjaga jarak minimal 1 meter dari orang lain. Percikan-percikan ini dapat menempel di benda dan permukaan lainnya di sekitar orang seperti meja, gagang pintu, dan pegangan tangan. Orang dapat terinfeksi dengan menyentuh benda atau permukaan tersebut, kemudian menyentuh mata, hidung, atau mulut mereka. Inilah sebabnya penting untuk mencuci tangan secara teratur dengan sabun dan air bersih mengalir, atau membersihkannya dengan cairan antiseptik berbahan dasar alkohol. WHO terus mengkaji perkembangan penelitian tentang cara penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru.

        </p>
        <br/>
       
        <br/>
           <p>Source : https://www.who.int/</p>
</div>
      </div>`;
  }
}
customElements.define("penularan-covid", Penularan);
