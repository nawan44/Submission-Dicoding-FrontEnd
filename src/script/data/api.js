var API = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.covid19api.com/summary' );
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.onreadystatechange = function (IPA) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
               
                var json = JSON.parse(xhr.responseText);
                var yourData = json.Data;
                this.innerHTML = ` 

        
                ${yourData.Country}
                `;
            }
        }
    };
    xhr.send(null);
   
}

