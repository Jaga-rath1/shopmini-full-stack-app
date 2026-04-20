// Navbar component
function renderNavbar(cartCount, onCartOpen, onSearch) {
  return `
    <nav class="navbar">
      <div class="nav-brand">
        ShopMini <span>/ store</span>
      </div>
      <div class="search-bar">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input type="text" placeholder="Search products..." id="search-input" />
      </div>
      <div class="nav-right">
        <button class="cart-btn" id="cart-toggle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Cart
          ${cartCount > 0 ? `<span class="cart-count">${cartCount}</span>` : ''}
        </button>
      </div>
    </nav>
  `;
}
