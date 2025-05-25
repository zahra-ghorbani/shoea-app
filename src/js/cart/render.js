//رندر کردن ایتم ها
import { getCart } from './storage.js';
import { openForm } from './modal.js';
import { changeQty } from './quantity.js';

export function renderCart() {
  const prodCart = document.querySelector('.prod-cart');
  const totalNum = document.querySelector('.total-num');
  const cart = getCart();

  prodCart.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "d-flex mt-5 align-items-center";
    div.setAttribute("data-index", index);

    div.innerHTML = `
      <div class="prod-cart-img ms-3">
        <img src="${item.imageURL}" alt="${item.name}" class="min-w-70 max-w-70 rounded-4 ms-3">
      </div>
      <div class="flex-grow-1 max-w-[275px] pl-4">
        <div class="d-flex justify-content-between ms-4">
          <h5 class="fw-bold cart-name max-w-[170px]">${item.name}</h5>
          <button class="trash-btn btn btn-link text-danger me-4 p-0">
            <img src="pic/icons8-trash-24.png" alt="trash">
          </button>
        </div>
        <div class="d-flex gap-2 mt-2 ms-4">
          <div class="color-cart-div mt-1" style="background-color:${item.color}; width: 20px; height: 20px; border-radius: 50%;"></div>
          <p class="text-secondary">${item.color} | Size = ${item.size}</p>
        </div>
        <div class="d-flex gap-5 ms-4 mt-1 align-items-center">
          <h4 class="fw-bold prod-price">$${(item.price * item.quantity).toFixed(2)}</h4>
          <div class="d-flex gap-2 bg-gray-100 rounded-5 pl-7 pr-7 pt-2 pb-2 max-w-[100px] me-4">
            <button class="text-lg minus">-</button>
            <h5 class="shoe-num fw-bold m-0">${item.quantity}</h5>
            <button class="text-lg plus">+</button>
          </div>
        </div>
      </div>
    `;

    div.querySelector(".trash-btn").addEventListener("click", () => openForm(index));
    div.querySelector(".minus").addEventListener("click", () => changeQty(index, -1));
    div.querySelector(".plus").addEventListener("click", () => changeQty(index, 1));

    prodCart.appendChild(div);
    total += item.price * item.quantity;
  });

  totalNum.textContent = total.toFixed(2);
}