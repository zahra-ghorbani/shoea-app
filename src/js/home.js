import { sayGood } from "./home/ui.js";
import { fetchUserInfo } from "./home/api.js";
import { loadSneakers, loadBrands, resetLoadState } from "./home/sneaker.js";

const nameElem = document.querySelector(".nameandlast");
const saygoodElem = document.querySelector(".saygood");
const cardcontainer = document.querySelector(".products");
const brandButtons = document.querySelector(".brand-buttons");

sayGood(saygoodElem); 

fetchUserInfo().then(user => {
  nameElem.textContent = user?.username || "Guest";
});

loadSneakers(cardcontainer);
loadBrands(brandButtons, setsome);

function setsome(brand) {
  resetLoadState(brand);
  loadSneakers(cardcontainer, brand, true);

  const buttons = document.querySelectorAll(".product_arm_button");
  buttons.forEach(btn => {
    btn.classList.remove("bg-black", "text-white");
    btn.classList.add("bg-white", "text-black");
  });

  const activeBtn = Array.from(buttons).find(
    btn => btn.textContent.trim().toLowerCase() === brand.toLowerCase() ||
    (brand === "mostpopular" && btn.textContent.trim() === "All")
  );
  if (activeBtn) {
    activeBtn.classList.add("bg-black", "text-white");
    activeBtn.classList.remove("bg-white", "text-black");
  }
}

cardcontainer.addEventListener("click", (e) => {
  const card = e.target.closest("#productCard");
  if (!card) return;

  const id = card.dataset.id;
  sessionStorage.setItem("selectedProductId", id); // برای استفاده در sneaker.js
  window.location.href = `sneaker.html`; // فقط به آدرس برید، نیازی به ?id نیست
});


window.addEventListener("scroll", () => {
  const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
  if (nearBottom) {
    loadSneakers(cardcontainer);
  }
});