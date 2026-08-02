function enregistrerPrix() {

    const prix = {

        vpn_semaine: "500 FCFA",
        vpn_mois: "1000 FCFA",
        formations: "3000 FCFA",
        revendeur_v2ray: "1500 FCFA",
        site_web: "10000 FCFA"

    };


    localStorage.setItem(
        "desire_prix",
        JSON.stringify(prix)
    );


    alert("✅ Prix enregistrés avec succès");

}
