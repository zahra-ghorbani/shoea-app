//پاپ اپ حذف
import { getCart, saveCart } from './storage.js';
import { renderCart } from './render.js';

let currentRemoveIndex = null;
let currentQty = 1;
let currentPrice = 1;

export function openForm(index) {
  const cart = getCart();
  const item = cart[index];

  currentRemoveIndex = index;
  currentQty = item.quantity;
  currentPrice = item.price;

  document.getElementById("popupImg").src = item.imageURL;
  document.getElementById("popupName").innerText = item.name;
  document.getElementById("popupMeta").innerText = `${item.color} | Size = ${item.size}`;
  document.getElementById("popupPrice").innerText = `$${(currentPrice * currentQty).toFixed(2)}`;
  document.getElementById("popupcount").innerText = currentQty;

  document.getElementById("myForm").classList.remove("d-none");
  document.getElementById("popupBackdrop").classList.remove("d-none");
}

export function adjustQty(delta) {
  currentQty += delta;
  if (currentQty < 1) currentQty = 1;

  document.getElementById("popupcount").innerText = currentQty;
  document.getElementById("popupPrice").innerText = `$${(currentQty * currentPrice).toFixed(2)}`;
}

export function closeForm() {
  currentRemoveIndex = null;
  document.getElementById("myForm").classList.add("d-none");
  document.getElementById("popupBackdrop").classList.add("d-none");
}

export function confirmRemove() {
  if (currentRemoveIndex !== null) {
    const cart = getCart();
    cart.splice(currentRemoveIndex, 1);
    saveCart(cart);
    currentRemoveIndex = null;
    renderCart();
    closeForm();
  }
}