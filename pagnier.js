let numero = 0;
let prixTotals = 0


for( let i = 0; i < localStorage.length; i++){
    
   let nomCommande = localStorage.key(i);
   
    const Commande = JSON.parse(localStorage.getItem(nomCommande));
    if ((isNaN(Commande.prix) == false)){
        numero += 1;
        creerCommand(numero);
        creerCommandeNumero(numero, Commande.nom);
        creerCommandeName(Commande.nom);
        creerCommandeQuantite(Commande.quantite, Commande.nom);
        creerCommandePrix(Commande.prix, Commande.quantite, Commande.nom);
        prixTotals += Commande.prix*Commande.quantite/100;
        supprimer (numero);

        document
            .getElementById("numero"+numero)
            .addEventListener("click", function(){
                localStorage.removeItem("commande"+Commande.article+Commande.nom);
                document.location.reload();

        })
        
        
    }
}
function creerCommand (nombre){
    var x = document.createElement("div");
    var t = document.createTextNode("article n°"+nombre);
    x.appendChild(t);
    x.classList.add("commande");
    x.setAttribute ("id", nombre)
    document.getElementById("pagnier").appendChild(x);
}
function creerCommandeNumero (nombre, name){
        var x = document.createElement("div");
        x.classList.add("numero");
        x.setAttribute("id", name)
        document.getElementById(nombre).appendChild(x);
}
function creerCommandeName (name){
    var x = document.createElement("div");
    var t = document.createTextNode(name);
    x.appendChild(t);
    x.classList.add("name");
    document.getElementById(name).appendChild(x);
}
function creerCommandeQuantite (quantite, name){
    var x = document.createElement("div");
    var t = document.createTextNode("Nombre commander = "+quantite);
    x.appendChild(t);
    x.classList.add("quantite");
    document.getElementById(name).appendChild(x);
}
function creerCommandePrix (prix, quantite, name){
    var montant = prix*quantite/100
    var x = document.createElement("div");
    var t = document.createTextNode("Prix = "+montant+"€");
    x.appendChild(t);
    x.classList.add("prix");
    document.getElementById(name).appendChild(x);
}
function prixCommande (prixTotals){
    
    var x = document.createElement("div");
    var t = document.createTextNode("Montant du pagnier = "+prixTotals+"€");
    x.appendChild(t);
    x.classList.add("prixCommande");
    document.getElementById("valeurPagnier").appendChild(x);
}
prixCommande (prixTotals);

document
    .getElementById("formulaire")
    .addEventListener("click", function(){
        tarif = {
            tarifTotal:""
        }
        tarif.tarifTotal = prixTotals;
        const storageTarif = JSON.stringify(tarif);
        localStorage.setItem("totalTarif", storageTarif);
    })

function supprimer (numero){
    var x = document.createElement("input");
    x.setAttribute("type", "button")
    x.setAttribute ("value","Suprimer");
    x.setAttribute ("id", "numero"+numero);
    x.setAttribute("class", "suprimer");
    document.getElementById(numero).appendChild(x);
}




document
    .getElementById("reset")
    .addEventListener("click", function(){
        localStorage.clear();
        document.location.reload();
    })




