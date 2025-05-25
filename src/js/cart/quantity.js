//تغییر تعداد
import { getCart, saveCart } from './storage.js';
import { renderCart } from './render.js';

export function changeQty(index, delta) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    saveCart(cart);
    renderCart();
  }
}