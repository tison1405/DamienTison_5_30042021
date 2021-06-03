const Confirmation = JSON.parse(localStorage.getItem("commandeConfirmée"));
console.log(Confirmation.tableauProducts, Confirmation.objContact);
const tarifTotal = JSON.parse(localStorage.getItem("totalTarif"));
console.log(tarifTotal);
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
        document
        .getElementById("numeroDeCommande")
        .innerHTML = value.orderId;
        document
          .getElementById("prixTotal")
          .innerHTML = prixTotal+"€"
     })

   
    .catch(function(err) {
        alert ("probleme avec le serveur revenez plus tard")
      });
  }   
const body = {contact, products}

 send (body);

 document
  .getElementById("retour")
  .addEventListener("click", function(){
    localStorage.clear();
  })
 
    
    