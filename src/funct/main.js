if (!("serviceworker" in navigator)) {
    console.log("Service worker tidak didukung.");

} else {
    navigator
        .serviceworker
        .register("/sw.js")
        .then(function (registration) {
            console.log("Service terdaftar.");
        });
}