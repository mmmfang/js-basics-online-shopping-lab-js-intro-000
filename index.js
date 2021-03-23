var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var myObj = {itemName: item,
  itemPrice: price}
  cart.push(myObj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var temp =[];
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  else if (cart.length === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    for (var i=0; i < cart.length; i++) {
      temp.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
   } var lastAnd = `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`
  }

  // if (tempArray.length > 1){
  //   tempArray.pop();
  //   tempArray.push(`and ${cart[-1].itemName} at $${cart[-1].itemPrice}`)
  //}
   temp.pop();

  return `In your cart, you have ${temp.join(', ')}${lastAnd}.`
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
