let cart = [];

function addToCart(product, price, quantity) {
  // إضافة المنتج إلى السلة مع الكمية والسعر
  cart.push({ product: product, price: price, quantity: quantity });

  // عرض الرسالة في الأعلى بدلاً من alert
  displayMessage(`${product} تم إضافته إلى السلة!`);
}

function checkout() {
  // إذا كانت السلة فارغة، اخبر المستخدم
  if (cart.length === 0) {
    displayMessage("السلة فارغة! من فضلك أضف منتجات أولاً.");
    return;
  }

  let total = 0;
  let receipt = "<div class='receipt-container'><h2>الفاتورة:</h2><ul>";

  // حساب المجموع وعرض التفاصيل
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    receipt += `<li>${item.product} - $${item.price} × ${item.quantity} = $${itemTotal}</li>`;
  });

  // إضافة الإجمالي
  receipt += `<li class="total"><strong>الإجمالي: $${total}</strong></li></ul>`;
  receipt += `<button onclick="goToPayment()">إتمام الدفع</button>`;

  // إضافة زر إغلاق
  receipt += `<button class="close-btn" onclick="closeReceipt()">X</button></div>`;

  // عرض الفاتورة في منتصف الصفحة
  document.body.innerHTML = receipt;
}

function closeReceipt() {
  // العودة إلى صفحة المنتجات
  window.location.reload();
}

function goToPayment() {
  alert("تم إتمام الدفع بنجاح!");

  // محاكاة بيانات الدفع: يمكن تعديلها حسب ما تريد
  let paymentMethod = "بطاقة ائتمانية";  // يمكن استبدالها بنظام دفع حقيقي
  let contactNumber = "+9053769028"; // رقم التواصل الجديد

  // بعد الدفع، إظهار تفاصيل الشراء
  showOrderSummary(paymentMethod, contactNumber);
}

function showOrderSummary(paymentMethod, contactNumber) {
  let total = 0;
  let orderDetails = "<div class='receipt-container'><h2>تفاصيل الطلب:</h2><ul>";

  // عرض المنتجات
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    orderDetails += `<li>${item.product} - $${item.price} × ${item.quantity} = $${itemTotal}</li>`;
  });

  // إضافة الإجمالي
  orderDetails += `<li class="total"><strong>الإجمالي: $${total}</strong></li></ul>`;

  // إضافة طريقة الدفع ورقم التواصل
  orderDetails += `<p><strong>طريقة الدفع:</strong> ${paymentMethod}</p>`;
  orderDetails += `<p><strong>رقم التواصل:</strong> ${contactNumber}</p>`;

  // إضافة زر إغلاق للعودة إلى الصفحة الرئيسية
  orderDetails += `<button class="close-btn" onclick="closeReceipt()">X</button></div>`;

  // عرض التفاصيل في الصفحة
  document.body.innerHTML = orderDetails;
}

// عرض الرسالة في أعلى الصفحة
function displayMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.innerHTML = message;
  messageElement.style.display = 'block';

  // إخفاء الرسالة بعد 5 ثواني
  setTimeout(() => {
    messageElement.style.display = 'none';
  }, 5000);
}

// عرض الانترو الترحيبي
window.onload = function() {
  const intro = document.getElementById('intro');
  
  // أضف تأثير الدخول
  intro.classList.add('show');

  // إخفاء الرسالة بعد 3 ثوانٍ مع تأثير الخروج
  setTimeout(() => {
    intro.classList.remove('show');
  }, 3000);
}
