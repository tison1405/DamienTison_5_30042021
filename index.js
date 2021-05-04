let listing = document.getElementById("listing");
function nameTeddy(element1){
    var x = document.createElement("P");
    var t = document.createTextNode(element1);
    x.appendChild(t);
    listing.appendChild(x);
}

function imageTeddy(element1) {
    var x = document.createElement("IMG");
    x.setAttribute("src", element1);
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    listing.appendChild(x);
  }


fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })

  .then(function(value) {
    console.log(value);
    nameTeddy (value.name);
    imageTeddy (value.imageUrl); 
  })

  .catch(function(err) {
    // Une erreur est survenue
  });
      
  
  

  

