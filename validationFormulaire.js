

let nomFormulaire = document.getElementById("validationServer01");
let prenomFormulaire = document.getElementById("validationServer02");
let emailFormulaire = document.getElementById("validationServer03");
let adresseFormulaire = document.getElementById("validationServer04");
let villeFormulaire = document.getElementById("validationServer05");

tableauFormulaire = [nomFormulaire, prenomFormulaire, emailFormulaire, adresseFormulaire, villeFormulaire];






     

document
    .getElementById("bouttonFormulaire")
    .addEventListener("click", function(e){
    
        let contact = {
            firstName:"",
            lastName:"",
            address:"",
            city:"",
            email:""
        }
        for (let entree of tableauFormulaire){
        if (entree.validity.patternMismatch === true) {
            console.log("I am expecting an e-mail address!");
          } else if(entree.validity.typeMismatch === true) {
              console.log("I am expecting an e-mail address!");
           
          } else if(entree.validity.valueMissing === true) {
              console.log("I am expecting an e-mail address!");
          }else{
             contact.lastName = nomFormulaire.value;
             contact.firstName = prenomFormulaire.value;
             contact.email = emailFormulaire.value;
             contact.address = adresseFormulaire.value;
             contact.city = villeFormulaire.value;
             
             }}
        
            

            let products = [];
            function idquantite (valeur){
              products.push(valeur);
            }
            
            for( let i = 0; i < localStorage.length; i++){
    
            let nomCommande = localStorage.key(i);
             const Commande = JSON.parse(localStorage.getItem(nomCommande));
             if ((isNaN(Commande.prix) == false)){
            
                 idquantite(Commande.id);
            }}
        

            
             confirmation = {
                tableauProducts:"",
                objContact:"",
                tarif:""
            }
            confirmation.tableauProducts = products;
            confirmation.objContact = contact;
            confirmation.tarif = document.getElementsByClassName("prixCommande").value;

            console.log(confirmation.tarif);

            const storageConfirmation = JSON.stringify(confirmation);
            localStorage.setItem("commandeConfirmée", storageConfirmation);
            console.log(confirmation);
            
            
            
        
    });
    
