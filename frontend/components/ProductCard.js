// ProductCard component
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '★'.repeat(full);
  if (half) stars += '½';
  stars += '☆'.repeat(5 - full - (half ? 1 : 0));
  return stars;
}

function getBadgeClass(badge) {
  const map = {
    'Sale': 'badge-sale', 'New': 'badge-new',
    'Best Seller': 'badge-best', 'Top Rated': 'badge-rated', 'Limited': 'badge-limited'
  };
  return map[badge] || 'badge-new';
}

function getDiscount(price, originalPrice) {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

function renderProductCard(product, isAdded) {
  const discount = getDiscount(product.price, product.originalPrice);
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="card-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${product.badge ? `<span class="badge ${getBadgeClass(product.badge)}">${product.badge}</span>` : ''}
        <button class="wishlist-btn" data-wishlist="${product.id}" title="Wishlist">♡</button>
      </div>
      <div class="card-body">
        <div class="card-category">${product.category}</div>
        <div class="card-name">${product.name}</div>
        <div class="card-desc">${product.description}</div>
        <div class="card-rating">
          <span class="stars">${renderStars(product.rating)}</span>
          <span class="rating-num">${product.rating}</span>
          <span class="review-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="card-footer">
          <div class="prices">
            <span class="price">₹${product.price.toLocaleString()}</span>
            <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
            <span class="discount">-${discount}%</span>
          </div>
          <button class="add-btn ${isAdded ? 'added' : ''}" data-add="${product.id}">
            ${isAdded
              ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg> Added`
              : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Add`
            }
          </button>
        </div>
      </div>
    </div>
  `;
}
