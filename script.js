document.addEventListener("DOMContentLoaded", () => {

    console.log("Désiré Digital Service chargé avec succès");

});
function commander(service) {

    const numero = "22669385149";

    const message = "Bonjour Désiré Digital Service, je souhaite commander : " + service;

    const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}
