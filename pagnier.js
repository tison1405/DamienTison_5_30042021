let numero = 0;
let prixTotals = 0

for( let i = 0; i < localStorage.length; i++){
    
   let nomCommande = localStorage.key(i);
    const Commande = JSON.parse(localStorage.getItem(nomCommande));
    if ((isNaN(Commande.prix) == false)){
        numero += 1;
        console.log(Commande);
        creerCommande(Commande.nom, Commande.prix, Commande.quantite, numero);
        prixTotals += Commande.prix*Commande.quantite/100;
        console.log(prixTotals);
        supprimer (numero);

        document
            .getElementById("numero"+numero)
            .addEventListener("click", function(){
                storage.removeItem(Commande.quantite);
                document.location.reload();
        })
        
        
    }
}

function creerCommande (nom, prix, quantite, nombre){
        var prixTotal = prix*quantite/100;
        var x = document.createElement("P");
        var t = document.createTextNode("article n°"+nombre+": "+nom+" nombres commandés: "+quantite+" prix:"+prixTotal+"€");
        x.appendChild(t);
        x.classList.add("article");
        x.setAttribute ("id", nombre)
        document.getElementById("pagnier").appendChild(x);


}
function prixCommande (prixTotals){
    
    var x = document.createElement("P");
    var t = document.createTextNode("Montant du pagnier = "+prixTotals+"€");
    x.appendChild(t);
    x.classList.add("prixCommande");
    document.getElementById("valeurPagnier").appendChild(x);
}
prixCommande (prixTotals);

function supprimer (numero){
    var x = document.createElement("input");
    x.setAttribute("type", "button")
    x.setAttribute ("value","suppimer");
    x.setAttribute ("id", "numero"+numero);
    document.getElementById(numero).appendChild(x);
}




document
    .getElementById("reset")
    .addEventListener("click", function(){
        localStorage.clear();
        document.location.reload();
        console.log("hello");
    })




