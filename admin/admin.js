function connexion() {

    const password = document.getElementById("password").value;

    if (password === "2583") {

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").innerHTML =
        "❌ Mot de passe incorrect";

    }

}
