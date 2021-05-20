const Confirmation = JSON.parse(localStorage.getItem("commandeConfirmée"));
console.log(Confirmation.tableauProducts, Confirmation.objContact, Confirmation.tarif);
const tarifTotal = JSON.parse(localStorage.getItem("totalTarif"));
let products = Confirmation.tableauProducts;
let contact = Confirmation.objContact;
let prixTotal = tarifTotal.tarifTotal;

   
function send(element1){
    fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(element1), 
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        console.log(value);
        document
        .getElementById("confirmation")
        .innerHTML = "Votre numero de confirmation de commande: "+value.orderId+" pour un montant de "+prixTotal+"€";
     })

   
    .catch(function(err) {
        alert ("probleme revenez plus tard")
      });
  }   
const body = {contact, products}

 send (body);

 document
  .getElementById("retour")
  .addEventListener("click", function(){
    localStorage.clear();
  })
 
    
    