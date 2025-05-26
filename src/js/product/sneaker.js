import { fetchProductById } from "./api.js";
import { renderDescription, renderSizes, renderColors, updateTotalPrice } from "./ui.js";
import { setupQtyButtons, setupAddToCart } from "./events.js";
import {
  resetState,
  setCurrentProduct,
  setSelectedSize,
  setSelectedColor
} from "./state.js";

const token = sessionStorage.getItem("token");
const productId = sessionStorage.getItem("selectedProductId");

if (!token || !productId) {
  window.location.href = "home.html";
}

(async function () {
  resetState(); // حالت قبلی پاک بشه

  const product = await fetchProductById(productId);
  if (!product) return;

  setCurrentProduct(product); // داخل استیت ذخیره شه

  // نمایش اطلاعات محصول
  document.getElementById("productImage").src = product.imageURL;
  document.getElementById("productName").textContent = product.name;
  updateTotalPrice(product.price);

  // توضیحات، سایزها و رنگ‌ها
  renderDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit...", document.getElementById("productDescription"));
  renderSizes(product.sizes.split("|"), setSelectedSize);
  renderColors(product.colors.split("|"), setSelectedColor);

  // دکمه‌ها
  setupQtyButtons();
  setupAddToCart();
})();