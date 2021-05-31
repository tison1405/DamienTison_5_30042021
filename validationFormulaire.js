



tableauFormulaire = ["validationServer01", "validationServer02", "validationServer03", "validationServer04", "validationServer05"];






     

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
        for (let entree of tableauFormulaire){

        if (document.getElementById(entree).validity.patternMismatch === true) {
            document.getElementById(entree).setAttribute("class", "form-control is-invalid");
            var x = document.getElementById("invalid"+entree)
                            .innerHTML = "Veuillez ecrir des lettres pas des chiffres!";


          } else if(document.getElementById(entree).validity.typeMismatch === true) {
            document.getElementById(entree).setAttribute("class", "form-control is-invalid");
            var x = document.getElementById("invalid"+entree)
                            .innerHTML = "Veuillez ecrir une adresse Email!";
            
           
          } else if(document.getElementById(entree).validity.valueMissing === true) {
            document.getElementById(entree).setAttribute("class", "form-control is-invalid");
             document.getElementById("invalid"+entree)
                    .innerHTML = "Veuillez compléter le champ!";
         
          }else{
            document.getElementById(entree).setAttribute("class", "form-control is-valid");
            var x = document.getElementById("valid"+entree)
                            .innerHTML="vous avez completé correctement le champ!";
            

             contact.lastName = document.getElementById("validationServer01").value;
             contact.firstName = document.getElementById("validationServer02").value;
             contact.email = document.getElementById("validationServer03").value;
             contact.address = document.getElementById("validationServer04").value;
             contact.city = document.getElementById("validationServer05").value;
             
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
            if (products.length == 0){
                    e.preventDefault();
                    alert ("votre panier est vide! Veuillez ajouter un article");
            }
              
        

            
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
    
