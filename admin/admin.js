function login() {

    const password = document.getElementById("password").value;

    if (password === "25803") {

        localStorage.setItem("adminConnecte", "true");

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").innerHTML =
        "❌ Mot de passe incorrect";

    }

}



function toggleService(id) {

    const element = document.getElementById(id);

    if (element.innerHTML.includes("Disponible")) {

        element.innerHTML = "Statut : Indisponible";

        localStorage.setItem(id, "Indisponible");

    } else {

        element.innerHTML = "Statut : Disponible";

        localStorage.setItem(id, "Disponible");

    }

}



function savePrice(id) {

    const price = document.getElementById(id).value;

    localStorage.setItem(id, price);

    alert("✅ Prix enregistré");

}



window.onload = function() {

    const elements = [
        "vpn-status",
        "formation-status",
        "revendeur-status",
        "digital-status",
        "test-status"
    ];


    elements.forEach(function(id){

        const value = localStorage.getItem(id);

        if(value){

            document.getElementById(id).innerHTML =
            "Statut : " + value;

        }

    });


};
