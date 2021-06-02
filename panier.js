let numero = 0;
let prixTotals = 0

//boucle pour recuperer les objets commandes dans le localStorage//
for( let i = 0; i < localStorage.length; i++){
    
   let nomCommande = localStorage.key(i);
   
    const Commande = JSON.parse(localStorage.getItem(nomCommande));
    if ((isNaN(Commande.prix) == false)){
        testObjetCommande(Commande);   
    }
}
//testObjetCommande controle que l'objet Commande à les bons attributs// 
function testObjetCommande(commande){
if (!commande.nom || !commande.prix || !commande.quantite || !commande.article || !commande.id){
    console.log("l'objet commande n'est pas correct")
}else{
    console.log("l'objet Commande est conforme");
    numero += 1;
    creerCommand(numero);
    creerCommandeNumero(numero, commande.nom);
    creerCommandeName(commande.nom);
    creerCommandeQuantite(commande.quantite, commande.nom);
    creerCommandePrix(commande.prix, commande.quantite, commande.nom);
    prixTotals += commande.prix*commande.quantite/100;
    supprimer (numero, commande.article, commande.nom);  
}}

prixCommande (prixTotals);

//les fonctions creer ajoute des element html dans la div panier// 
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
//supprimer efface au click l'objet concerné du localStorage//
function supprimer (numero, article, nom){
    var x = document.createElement("input");
    x.setAttribute("type", "button")
    x.setAttribute ("value","Supprimer");
    x.setAttribute ("id", "numero"+numero);
    x.setAttribute("class", "suprimer");
    document.getElementById(numero).appendChild(x);
    document
            .getElementById("numero"+numero)
            .addEventListener("click", function(){
                localStorage.removeItem("commande"+article+nom);
                document.location.reload();})
}
//prixCommande affiche le montant total du panier//
function prixCommande (prixTotals){
    var x = document.createElement("div");
    var t = document.createTextNode("Montant du pagnier = "+prixTotals+"€");
    x.appendChild(t);
    x.classList.add("prixCommande");
    document.getElementById("valeurPagnier").appendChild(x);
}

function testTarif(prixTotals){
    tarif = {
        tarifTotal:""
    }
    tarif.tarifTotal = prixTotals;
    if (isNaN(tarif.tarifTotal) == true){
        console.log("l'objet tarif ne contient pas le bon attribut")
    }else{
        console.log("l'objet tarif est conforme pour le localStorage")
    }
}

//envoie du tarif de la commande au localStorage//
    testTarif(prixTotals);
    document.getElementById("formulaire")
            .addEventListener("click", function(){
        
        const storageTarif = JSON.stringify(tarif);
        localStorage.setItem("totalTarif", storageTarif);
    })



    










