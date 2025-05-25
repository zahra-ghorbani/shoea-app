import { fetchSneakers, fetchBrands } from "./api.js";
import { renderCard } from "./ui.js";

let currentPage = 1;
let loading = false;
let reachedEnd = false;
let currentBrand = "";

export async function loadSneakers(container, brand = "", isNew = false) {
  if (loading || reachedEnd) return;
  loading = true;

  const result = await fetchSneakers(currentPage, brand);
  const data = result?.data || [];

  if (isNew) container.innerHTML = "";
  if (data.length === 0) {
    reachedEnd = true;
    return;
  }

  container.insertAdjacentHTML("beforeend", data.map(renderCard).join(""));
  currentPage++;
  loading = false;
}

export async function loadBrands(container, setsomeFn) {
  const brands = await fetchBrands();

  container.innerHTML = `<button onclick="setsome('mostpopular')" class="product_arm_button px-3 py-1 rounded-full border border-black bg-black text-white">All</button>`;

  brands.forEach((brand) => {
    container.innerHTML += `
      <button onclick="setsome('${brand}')" class="product_arm_button px-3 py-1 rounded-full border border-black bg-white text-black">${brand}</button>`;
  });

  window.setsome = setsomeFn;
}

export function resetLoadState(brand) {
  currentPage = 1;
  reachedEnd = false;
  currentBrand = brand;
}