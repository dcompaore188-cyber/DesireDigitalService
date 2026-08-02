document.addEventListener("DOMContentLoaded", () => {

    console.log("Désiré Digital Service chargé avec succès");

});


function commander(service) {

    const numero = "22669385149";

    const message =
        "Bonjour Désiré Digital Service 👋\n\n" +
        "Je souhaite acheter : " + service + "\n\n" +
        "Merci de me donner les informations pour la commande.";

    const url =
        "https://wa.me/" + numero +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}
