


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
    alert ("probleme revenez plus tard");
  });

  let listing = document.getElementById("listing");
  let teddyTableau = [];

// la fonction teddy crée une div de la boucle avec un Id nameTeddy//
 function teddy(element1){
    var x = document.createElement("a");
    x.setAttribute('id', element1);
    x.setAttribute("class", "card  col-lg-3 col-8");
    x.setAttribute('href','produit.html');
    listing.appendChild(x);
    }
function divCardBody(element1, element3){
  var x = document.createElement("div");
  x.setAttribute("class", "card-body");
  x.setAttribute("id",element3);
  document.getElementById(element1).appendChild(x);
}

//la fonction nameTeddy crée un paragraphe dans la div contenant le nom//
 function nameTeddy(element1, element3){
    var x = document.createElement("h2");
    var t = document.createTextNode(element1);
    x.appendChild(t);
    x.setAttribute("class","card-title text-center");
    document.getElementById(element3).appendChild(x);
}

//la fonction imageTeddy importe l'image du teddy dans la div// 
 function imageTeddy(element1, element2) {
    var x = document.createElement("IMG");
    x.setAttribute("src", element2);
    x.classList.add("imageTeddy");
    document.getElementById(element1).appendChild(x);
  }

//la fonction clickTeddy envoie teddie._id au localStorage au click//
  function clickTeddy (element1, element2){
    document
        .getElementById(element1)
        .addEventListener ("click", function(e){
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
      if (!teddie.name){
        console.log ("missing teddie.name")
      } else if (!teddie._id){
        console.log("missing teddie id")
      } else if (!teddie.imageUrl){
        console.log("missing image")
      }else{
      teddy(teddie.name);
      divCardBody(teddie.name, teddie._id);
      nameTeddy(teddie.name, teddie._id);
      imageTeddy(teddie.name, teddie.imageUrl);
      clickTeddy(teddie.name,teddie._id)
      
    }};
  }
  console.log("localStorage = "+localStorage.length);
  



 
  


    

    
  

  
 
  
    
  
    
  
  

  

