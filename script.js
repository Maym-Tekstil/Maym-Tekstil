let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} added to cart!`);
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`You have ${cart.length} items.\nTotal: $${total.toFixed(2)}\nThanks for shopping!`);
  cart = []; // Clear the cart
}
