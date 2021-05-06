let listing = document.getElementById("listing");
// la fonction teddy crée une div de la boucle avec un Id nameTeddy//
 function teddy(element1){
  var x = document.createElement("div");
  x.setAttribute('id', element1);
  listing.appendChild(x); 
}
//la fonction nameTeddy crée un paragraphe dans la div contenant le nom//
 function nameTeddy(element1){
    var x = document.createElement("P");
    var t = document.createTextNode(element1);
    x.appendChild(t);
    x.classList.add("nameTeddy");
    document.getElementById(element1).appendChild(x);
}
//la fonction imageTeddy importe l'image du teddy dans la div// 
 function imageTeddy(element1, element2) {
    var x = document.createElement("IMG");
    x.setAttribute("src", element2);
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.classList.add("imageTeddy");
    document.getElementById(element1).appendChild(x);
  }


fetch("http://localhost:3000/api/teddies/")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })

  .then(function(value) {
    {
      let x;
        //la boucle extrait les valeurs des attributs "name" et "image" de chaque objet du tableau "value"//
        for (x of value){
          teddy(x.name);
          nameTeddy(x.name);
          imageTeddy(x.name, x.imageUrl)

        };

    }
  })

  .catch(function(err) {
    // Une erreur est survenue
  });
  
      
  
  

  

