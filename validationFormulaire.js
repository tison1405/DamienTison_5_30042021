



tableauFormulaire = ["validationServer01", "validationServer02", "validationServer03", "validationServer04", "validationServer05"];






     
//envoie l'objet confirmation au localStorage au click commander//
document
    .getElementById("formulaire")
    .addEventListener("click", function(e){
    
        let contact = {
            firstName:"",
            lastName:"",
            address:"",
            city:"",
            email:""
        }
        //boucle de controle des champs du formulaire//
        for (let entree of tableauFormulaire){
        //valide la pattern//
        if (document.getElementById(entree).validity.patternMismatch === true) {
            document.getElementById(entree).setAttribute("class", "form-control is-invalid");
            var x = document.getElementById("invalid"+entree)
                            .innerHTML = "Veuillez ecrir des lettres pas des chiffres!";

          //valide le type//
          } else if(document.getElementById(entree).validity.typeMismatch === true) {
            document.getElementById(entree).setAttribute("class", "form-control is-invalid");
            var x = document.getElementById("invalid"+entree)
                            .innerHTML = "Veuillez écrire une adresse Email!";
            
          //valide que le champ est une valeur//
          } else if(document.getElementById(entree).validity.valueMissing === true) {
            document.getElementById(entree).setAttribute("class", "form-control is-invalid");
             document.getElementById("invalid"+entree)
                    .innerHTML = "Veuillez compléter le champ!";
          //implante les valeurs saisis après vérification dans l'objet contact//
          }else{
            document.getElementById(entree).setAttribute("class", "form-control is-valid");
            var x = document.getElementById("valid"+entree)
                            .innerHTML="vous avez complèté correctement le champ!";
            

             contact.lastName = document.getElementById("validationServer01").value;
             contact.firstName = document.getElementById("validationServer02").value;
             contact.email = document.getElementById("validationServer03").value;
             contact.address = document.getElementById("validationServer04").value;
             contact.city = document.getElementById("validationServer05").value;
             
             }}
        
            

             let products = [];
            //implante les id des teddies commandés dans le tableau products//
            function idQuantite (){
              for( let i = 0; i < localStorage.length; i++){
    
                let nomCommande = localStorage.key(i);
                 const Commande = JSON.parse(localStorage.getItem(nomCommande));
                 if ((isNaN(Commande.prix) == false)){
                  products.push(Commande.id);    
                }else{
                  //do not think//
                }
              }
            }
            //verifie qu'il y a bien des id dans le tableau si non bloque le bouton commander//
            function testProductsLength (products) {
              if (products.length == 0){
                      e.preventDefault();
                      alert ("votre panier est vide! Veuillez ajouter un article");
              }}
            idQuantite();
            testProductsLength(products);
            
           
            
           
              
        

            
             confirmation = {
                tableauProducts:"",
                objContact:"",
            }
            confirmation.tableauProducts = products;
            confirmation.objContact = contact;
          //envoie l'objet confirmation dans le localStorage//
            const storageConfirmation = JSON.stringify(confirmation);
            localStorage.setItem("commandeConfirmée", storageConfirmation);
            console.log(confirmation);
            document.location.href = "confirmation_de_commande.html" ;  
    });
    
    
