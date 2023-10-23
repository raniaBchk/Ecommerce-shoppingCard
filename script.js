var a,b;
function menu(){
  
    if(a==5){
        document.getElementById("ul").style.visibility="visible";
        return a=0;
    }else{
        document.getElementById("ul").style.visibility="hidden"; 
        return a=5;
    }
}

function search(){
  
  if(b==5){
      document.getElementById("search-group").style.display="block";
      return b=0;
  }else{
      document.getElementById("search-group").style.display="none"; 
      return b=5;
  }
}

  function close()
  {

     if(b==5){
         document.getElementById("search-group").style.display="block";
      return b=0;
  }else{
     document.getElementById("search-group").style.display="none"; 
      return b=5;
  }
     
    
  }


var countDownDate = new Date("July 16,2024 11:40:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
 
 const j=document.getElementById("j")
 const h=document.getElementById("h")
 const m=document.getElementById("m")
 const s=document.getElementById("s")
  j.innerHTML=days
  h.innerHTML=hours
  m.innerHTML=minutes
  s.innerHTML=seconds

  if (distance < 0) {
    clearInterval(x);
    alert("CountDown Over");
  }
}, 1000);



/* shopping cart */


if(document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

function ready(){
    var removeCartItemButtons= document.getElementsByClassName("remove") // retourne tt les elts li 3ndhom classe remove

    
    // supprimer l'article avec remove 



    var Buttons=document.getElementsByClassName("button-heart")
    console.log(Buttons);
    for(var i=0;i<Buttons.length;i++){
    var button=Buttons[i]
   // console.log(button);
    button.addEventListener('click',changeColorHeart);
}


function changeColorHeart(event){
    console.log("fonction");
    var buttonClicked=event.target;
    buttonClicked.style.color="#ff3368";
    

}



    for(var i=0;i<removeCartItemButtons.length;i++){
        var button=removeCartItemButtons[i]
        button.addEventListener('click',removeCartItem)
    }

    var quantiteInputs=document.getElementsByClassName('cart-quantite')
    for(var i=0;i<quantiteInputs.length;i++){
        var input=quantiteInputs[i]
        input.addEventListener('change',quantiteChanged)
}

    var addToCartButtons=document.getElementsByClassName("add-to-cart")
    for(var i=0;i<addToCartButtons.length;i++){
        var button=addToCartButtons[i]
        button.addEventListener('click',addToCartClicked)

}

    document.getElementsByClassName('acheter')[0].addEventListener('click', acheterClicked)
}


function addToCartClicked(event){
        var buttonClicked=event.target
        produit=buttonClicked.parentElement.parentElement
        console.log("add to cart clicked")
        var titre=produit.getElementsByClassName("titre")[0].innerText
        var prix=produit.getElementsByClassName("prix")[0].innerText
       
        var imageSrc=produit.getElementsByClassName("image")[0].src
        addToItemCart(titre,prix,imageSrc)
       
        updateCartTotal()
        }

function addToItemCart(titre,prix,imageSrc){
    var cartRow=document.createElement('tr')
    cartRow.classList.add('cart-article')
    var cartItems=document.getElementsByClassName('shopping-cart')[0]
    var cartItemNames=document.getElementsByClassName('cart-titre')
    for(var i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText==titre){
            alert('deja selectionnee')
            return
        }
    }

    
    var cartRowContents= `
    <tr class="cart-article">
    <td id="img"> 
    <button type="button" class="remove"><i class="fa-solid fa-xmark"></i></button>
    <img src="${imageSrc}" alt="" ><h4 class="cart-titre">${titre}</h4></td>
    <td><h4 class="cart-prix"> ${prix} </h4></td>
    <td>
        <input type="number" value="1" class="cart-quantite">
    </td>
    <td><h4 class="cart-sous-total">${prix} </h4></td>
    </tr>
    `

    cartRow.innerHTML=cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("remove")[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName("cart-quantite")[0].addEventListener('change',quantiteChanged)

    
}     

function quantiteChanged(event){
    var input=event.target
    if (isNaN(input.value) || input.value<=0){
        input.value=1
       
    }
    sousTotal()
    updateCartTotal()
   
} 

function sousTotal(){
  
   
    var cartItemContainer=document.getElementsByClassName('shopping-cart')[0]
    var cartRows= cartItemContainer.getElementsByClassName('cart-article')
   

    for(var i=0;i<cartRows.length;i++){
       var cartRow=cartRows[i]
      var cartPrixItems=document.getElementsByClassName('cart-prix')
      var cartQuantiteItems=cartRow.getElementsByClassName('cart-quantite')
      var prixFloat=parseFloat(cartPrixItems[i].innerText.replace('DZD','')) 
      var quantite=cartQuantiteItems[0].value
      var s1=prixFloat* quantite
   
      document.getElementsByClassName('cart-sous-total')[i].innerHTML=s1 + ' DZD'
      


       }

       
    
}


function removeCartItem(event){
    var buttonClicked=event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
    }



function acheterClicked() {


    alert('achat validée, Merci à vous ! ')
    var cartItems = document.getElementsByClassName('shopping-cart')[0]
   
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }

    updateCartTotal()

}



  


   



function updateCartTotal(){
    var cartItemContainer=document.getElementsByClassName('shopping-cart')[0]
    var cartRows= cartItemContainer.getElementsByClassName('cart-article')
    var total=0
    for(var i=0;i<cartRows.length;i++){
        var cartRow=cartRows[i]
        var cartPrix=cartRow.getElementsByClassName('cart-prix')[0]
        var cartQuantite=cartRow.getElementsByClassName('cart-quantite')[0]
        //console.log(cartPrix,cartQuantite)
        var prix=parseFloat(cartPrix.innerText.replace('DZD','')) // kan string lzm ndiro parseFloat bch nrdj3oh number
        // console.log(prix)
        var quantite=cartQuantite.value
        total= total+ (prix*quantite)
        
    }
    total= Math.round(total*100)/100
    document.getElementsByClassName('cart-total-prix')[0].innerHTML=total + ' DZD'

}


    
var a;
function myFunction(event) {
console.log("button clicked");
document.getElementById("heart").style.color="red";
       
}

