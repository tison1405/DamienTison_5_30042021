

fetch("http://localhost:3000/api/teddies/")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })

  .then(function(value) {
     getTeddies(value);
  })

  .catch(function(err) {
    alert ("probleme revenez plus tard")
  });

  let listing = document.getElementById("listing");
  let teddyTableau = [];

// la fonction teddy crée une div de la boucle avec un Id nameTeddy//
 function teddy(element1){
  var x = document.createElement("a");
  x.setAttribute('id', element1);
  x.setAttribute('href','page2.html');
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

//la fonction clickTeddy envoie teddie._id au localStorage au click//
  function clickTeddy (element1, element2){
    document
        .getElementById(element1)
        .addEventListener ("click", function(){
          setLocalStorage(element2);
        }) 

        
  }

  //la fonction setLocalStorage execute l'envoie//
  function setLocalStorage  (element2){
    let data = localStorage.getItem("product_value_teddies")
    if (!data) {
        data = {
            selectedId: "",
            orders: []
        }
    } else {
        data = JSON.parse(data);
    }

    data.selectedId = element2;
    const storageID = JSON.stringify(data);
    localStorage.setItem("product_value_teddies", storageID);
    console.log(data);
}

//la fonction getTeddies execute toute les autres fonctions a l'appel des produits backEnd//
  function getTeddies (teddies){

    for (let teddie of teddies){
      //la boucle extrait les valeurs des attributs "name" et "image" de chaque objet du tableau "value"//
      teddy(teddie.name);
      nameTeddy(teddie.name);
      imageTeddy(teddie.name, teddie.imageUrl);
      clickTeddy(teddie.name, teddie._id)
      
    };
  }
  



 
  


    

    
  

  
 
  
    
  
    
  
  

  

