// src/JS/product/state.js

let selectedSize = null;
let selectedColor = null;
let quantity = 1;
let currentProduct = {};

export function setSelectedSize(val) {
  selectedSize = val;
}
export function getSelectedSize() {
  return selectedSize;
}

export function setSelectedColor(val) {
  selectedColor = val;
}
export function getSelectedColor() {
  return selectedColor;
}

export function increaseQuantity() {
  quantity++;
}
export function decreaseQuantity() {
  if (quantity > 1) quantity--;
}
export function getQuantity() {
  return quantity;
}

export function setCurrentProduct(product) {
  currentProduct = product;
}
export function getCurrentProduct() {
  return currentProduct;
}

export function resetState() {
  selectedSize = null;
  selectedColor = null;
  quantity = 1;
  currentProduct = {};
}