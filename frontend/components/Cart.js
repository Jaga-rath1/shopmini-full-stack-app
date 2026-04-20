// Cart sidebar component
function renderCart(cart) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;
  const itemCount = cart.reduce((s, i) => s + i.quantity, 0);

  const itemsHtml = cart.length === 0
    ? `<div class="cart-empty"><span class="icon">🛍️</span><p>Your cart is empty</p></div>`
    : cart.map(item => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-cat">${item.category}</div>
            <div class="cart-item-bottom">
              <span class="item-price">₹${(item.price * item.quantity).toLocaleString()}</span>
              <div class="qty-ctrl">
                <button class="qty-btn" data-qty-dec="${item.id}">−</button>
                <span class="qty-num">${item.quantity}</span>
                <button class="qty-btn" data-qty-inc="${item.id}">+</button>
              </div>
            </div>
            <button class="remove-btn" data-remove="${item.id}">Remove</button>
          </div>
        </div>
      `).join('');

  return `
    <div class="cart-header">
      <h2>Cart (${itemCount})</h2>
      <button class="close-btn" id="cart-close">✕</button>
    </div>
    <div class="cart-items">${itemsHtml}</div>
    <div class="cart-footer">
      <div class="cart-totals">
        <div class="total-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
        <div class="total-row"><span>Shipping</span><span>${shipping === 0 ? 'Free 🎉' : '₹' + shipping}</span></div>
        <div class="total-row grand"><span>Total</span><span>₹${total.toLocaleString()}</span></div>
      </div>
      <button class="checkout-btn" id="checkout-btn" ${cart.length === 0 ? 'disabled' : ''}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Place Order
      </button>
    </div>
  `;
}
