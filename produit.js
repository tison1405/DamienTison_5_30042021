//recupe de teddie_id dans le localStorage//
const teddie_id = JSON.parse(localStorage.getItem("product_value_teddies")).selectedId;
console.log(teddie_id);

//appel de l'objet teddie dans le server//
fetch("http://localhost:3000/api/teddies/"+teddie_id)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })

  .then(function(value) {
    console.log(value);
    let teddie = value;
    testObjetTeddie(value);
    testObjetCommande(teddie.price, teddie.name, teddie._id);
  })

  .catch(function(err) {
    alert ("problème avec le serveur! Revenez plus tard!")
  });

  // testObjetTeddie verifie que l'objet value contient les bonnes attributs//
    function testObjetTeddie(value){
      if(!value.colors || !value._id || !value.name || !value.price || !value.imageUrl || !value.description){
        console.log("probleme avec l'une des valeur de  l'objet teddie")
      }else{
        console.log ("objet teddie conforme");
        nameTeddie(value.name);
        imageTeddy(value.imageUrl);
        description(value.description);
        getCouleurs(value.colors);
        prixUnitaire(value.price);
      }
    }
    let produitTeddie = document.getElementById("produitTeddie");
    let menuCouleur = document.getElementById("couleur");
    
  //nameTeddie creer un element p avec comme texte le nom du teddie//
    function nameTeddie(element1){
    var x = document.createElement("p");
    var t = document.createTextNode(element1);
    x.appendChild(t);
    x.classList.add("nameTeddie");
    produitTeddie.appendChild(x);
}
  //imageTeddie creer un element img avec comme image teddie.imageUrl//
    function imageTeddy(element1) {
    var x = document.createElement("img");
    x.setAttribute("src", element1);
    x.classList.add("imageTeddie");
    produitTeddie.appendChild(x);
  }
  //description creer un element p avec comme text la description du teddie//
    function description(element1){
    var x = document.createElement("P");
    var t = document.createTextNode(element1);
    x.appendChild(t);
    x.classList.add("descriptionTeddie");
    produitTeddie.appendChild(x);
  }
  //optionCouleur creer les option de couleur du select Id="couleur" avec le tableau teddie.colors//
    function optionCouleur(element1){
    var x = document.createElement("option");
    var t = document.createTextNode(element1);
    x.appendChild(t);
    x.setAttribute("value", element1);
    menuCouleur.appendChild(x);
    }
  //getCouleur creer une boucle du tableau teddie.colors et execute optionCouleur//
    function getCouleurs(couleurs){
    for (let couleur of couleurs){
    optionCouleur(couleur);
      }
    }
  //prixUnitaire creer un element p avec le prix du teddie// 
    function prixUnitaire(element1){
    let prix = element1/100; 
    var x = document.createElement("P");
    var t = document.createTextNode("Prix unitaire :"+ prix +"€");
    x.appendChild(t);
    x.classList.add("prixunitaire");
    document.getElementById("prixUnitaire").appendChild(x);
    }
  //testObjetCommande verifie que l'objet commande comprend tt les attributs de teddie//
    function testObjetCommande(price, name, id){
    let numero = 0;
    let numberTeddie = document.getElementById("quantite").value;
          commande = {
            nom: "",
            prix: "",
            quantite: "",
            article:"",
            id:""
          }
          numero += 1;
          commande.nom = name;
          commande.prix = price;
          commande.quantite = numberTeddie;
          commande.article = numero;
          commande.id = id;
          if (!commande.nom || !commande.prix || !commande.quantite || !commande.article || !commande.id){
            console.log("l'objet commande à un problême d'attribut")
            document
              .getElementById("Commander")
              .addEventListener("click",function(e){
                e.preventDefault();
              })
          }else{
            console.log("l'objet commande est conforme")
            commander(commande, numero, name);       
          }}
   //Commander envoie au click du bouton Commander au localStorage un objet commande et dirige vers la page panier//
    function commander(commande, numero, name){
      document
        .getElementById("Commander")
        .addEventListener("click",function(){
      const storageCommande = JSON.stringify(commande);
      localStorage.setItem("commande"+numero+name, storageCommande);
        })
    }

      
      
        
         
      

    
    

    
    
            
        
    
    
 
