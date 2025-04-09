let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} تمت إضافته إلى السلة!`);
}

function checkout() {
  if (cart.length === 0) {
    alert("سلة التسوق فارغة!");
    return;
  }

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`عدد المنتجات: ${cart.length}\nالمجموع: $${total.toFixed(2)}\nشكرًا لتسوقك من Maym!`);
  cart = [];
}
