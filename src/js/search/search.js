import { getProducts } from "./product.js";
import { saveSearchTerm } from "./recent.js";
import { renderRecent } from "./ui.js";
import { debounce } from "./debounce.js";

const searchInput = document.getElementById("search-input");
const recentContainer = document.getElementById("recent-container");
const recentList = document.getElementById("recent-list");
const clearHistoryBtn = document.getElementById("clear-history");
const resultsInfo = document.getElementById("results-info");
const productList = document.getElementById("product-list");
const notFound = document.getElementById("not-found");

searchInput.addEventListener("focus", () => {
  renderRecent(recentContainer, recentList, performSearch);
});

searchInput.addEventListener("blur", () => {
  setTimeout(() => recentContainer.classList.add("hidden"), 200);
});

async function performSearch(term) {
  saveSearchTerm(term);
  const res = await getProducts({ search: term });
  const items = res.data || [];

  resultsInfo.innerHTML = `
    <div class="flex justify-between items-center w-full">
      <span class="text-black font-bold">Results for "${term}"</span>
      <span class="text-black font-bold">${items.length} found</span>
    </div>
  `;
  resultsInfo.classList.remove("hidden");
  recentContainer.classList.add("hidden");
  productList.innerHTML = "";

  if (items.length) {
    notFound.classList.add("hidden");
    items.forEach(prod => {
      const card = document.createElement("div");
      card.className = "w-[182px] h-[244px] bg-white cursor-pointer";

      const img = document.createElement("img");
      img.src = prod.imageURL;
      img.className = "w-full h-[182px] bg-[#F3F3F3] rounded-[24px]";
      card.appendChild(img);

      const name = document.createElement("p");
      name.className = "font-bold text-[20px] mt-2 truncate";
      name.textContent = prod.name;
      card.appendChild(name);

      const price = document.createElement("p");
      price.className = "font-semibold text-[16px]";
      price.textContent = `$${prod.price.toFixed(2)}`;
      card.appendChild(price);

      card.onclick = () => window.location.href = `sneaker.html?id=${prod.id}`;
      productList.appendChild(card);
    });
  } else {
    notFound.classList.remove("hidden");
  }
}

const debouncedSearch = debounce(e => {
  const term = e.target.value.trim();
  if (term) {
    performSearch(term);
  } else {
    productList.innerHTML = "";
    resultsInfo.classList.add("hidden");
    notFound.classList.add("hidden");
  }
}, 500);

searchInput.addEventListener("input", debouncedSearch);

clearHistoryBtn.addEventListener("click", () => {
  localStorage.removeItem("recentSearches");
  renderRecent(recentContainer, recentList, performSearch);
});