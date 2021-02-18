function data() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.covid19api.com";

    xhr.onloadstart = function () {
        document.getElementById("button").innerHTML = "Loading...";
    }

    xhr.onerror = function () {
        alert("Gagal mengambil data");
    };

    xhr.onloadend = function () {
        if (this.responseText !== "") {
            var data = JSON.parse(this.responseText);
            var img = document.createElement("img");
            img.src = data.avatar_url;
            var name = document.createElement("h3");
            name.innerHTML = data.name;

            document.getElementById("hasil").append(img, name);
            document.getElementById("button").innerHTML = "Done";

            setTimeout(function () {
                document.getElementById("button").innerHTML = "Load Lagi";
            }, 3000);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

// function data(){
//     var url = "https://api.covid19api.com";
//     fetch(url).then(response => response.json())
//         .then(function(data){
//             var template = data.map(post => {
//                 return `
//                 <h3>${post.Country}</h3>
//                 <p>${post.Date}</p>
//                 <hr>
//                 `;
//             });
  
//             document.getElementById("hasil").innerHTML = template.join('<br>');
//         }).catch(function(e){
//             alert("gagal mengambil data");
//         });
//   }