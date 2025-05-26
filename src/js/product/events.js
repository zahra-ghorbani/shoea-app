// src/JS/product/events.js

import {
    getSelectedSize,
    getSelectedColor,
    getQuantity,
    getCurrentProduct,
    increaseQuantity,
    decreaseQuantity,
    resetState
  } from "./state.js";
  
  import { updateTotalPrice } from "./ui.js";
  
  export function setupQtyButtons() {
    document.getElementById("decreaseQty")?.addEventListener("click", () => {
      decreaseQuantity();
      updateTotalPrice(getCurrentProduct().price);
    });
  
    document.getElementById("increaseQty")?.addEventListener("click", () => {
      increaseQuantity();
      updateTotalPrice(getCurrentProduct().price);
    });
  }
  
  export function setupAddToCart() {
    document.getElementById("addToCartBtn")?.addEventListener("click", () => {
      const size = getSelectedSize();
      const color = getSelectedColor();
      const qty = getQuantity();
      const product = getCurrentProduct();
  
      if (!size || !color) {
        alert("Please select both size and color.");
        return;
      }
  
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      const existingIndex = cart.findIndex(
        item => item.id === product.id && item.size === size && item.color === color
      );
  
      if (existingIndex !== -1) {
        cart[existingIndex].quantity += qty;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          imageURL: product.imageURL,
          quantity: qty,
          size,
          color
        });
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Reset state and UI
      resetState();
      updateTotalPrice(product.price);
      document.getElementById("quantityDisplay").textContent = "1";
      document.querySelectorAll("#sizeOptions button").forEach(b =>
        b.classList.remove("bg-black", "text-white")
      );
      document.querySelectorAll("#colorOptions span").forEach(s =>
        s.classList.add("hidden")
      );
  
      alert("Added to cart!");
    });
  }