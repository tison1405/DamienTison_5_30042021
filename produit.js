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
    console.log(teddie.imageUrl);
    nameTeddie(teddie.name);
    imageTeddy(teddie.imageUrl);
    description(teddie.description);
    getCouleurs(teddie.colors);
    prixUnitaire(teddie.price);
    commander(teddie.price, teddie.name, teddie._id);
  })

  .catch(function(err) {
    alert ("probleme revenez plus tard")
  });

    let produitTeddie = document.getElementById("produitTeddie");
    let menuCouleur = document.getElementById("couleur");
    

    function nameTeddie(element1){
    var x = document.createElement("p");
    var t = document.createTextNode(element1);
    x.appendChild(t);
    x.classList.add("nameTeddie");
    produitTeddie.appendChild(x);
}

  function imageTeddy(element1) {
    var x = document.createElement("IMG");
    x.setAttribute("src", element1);
    x.classList.add("imageTeddie");
    produitTeddie.appendChild(x);
  }

  function description(element1){
    var x = document.createElement("P");
    var t = document.createTextNode(element1);
    x.appendChild(t);
    x.classList.add("descriptionTeddie");
    produitTeddie.appendChild(x);
}
    function optionCouleur(element1){
        var x = document.createElement("option");
        var t = document.createTextNode(element1);
        x.appendChild(t);
        x.setAttribute("value", element1);
        menuCouleur.appendChild(x);
    }
  
    function getCouleurs(couleurs){
        for (let couleur of couleurs){
            optionCouleur(couleur);
        }
    }
    function prixUnitaire(element1){
         let prix = element1/100; 
        var x = document.createElement("P");
        var t = document.createTextNode("Prix unitaire :"+ prix +"€");
        x.appendChild(t);

        x.classList.add("prixunitaire");
        document.getElementById("prixUnitaire").appendChild(x);
    }
   
    
    function commander(price, name, id){
      let numero = 0;
      document
        .getElementById("Commander")
        .addEventListener("click",function(){
          
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

          const storageCommande = JSON.stringify(commande);
          

          localStorage.setItem("commande"+numero+name, storageCommande);
          console.log(commande);
        })
    }

      
      
        
         
      

    
    

    
    
            
        
    
    
 
