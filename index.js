var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random() * 100);
 const newObj = {
   itemName: item,
   itemPrice: price
 }
 cart.push(newObj);
 return `${newObj.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var tempArray=[];
    for (let i=0; i < cart.length; i++) {
      tempArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    } tempArray.pop();
      let ending = `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`
    return `In your cart, you have ${tempArray.join(`, `)}${ending}.`
  }
}

function total() {
  var newTotal=0;
  for (let i = 0; i < cart.length; i++) {
    //newTotal = cart[i].itemPrice + newTotal;
    newTotal += cart[i].itemPrice;
  } return newTotal;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if cart[i].itemName === item {
      //remove item
    } else {
      return `That item is not in your cart.`
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
