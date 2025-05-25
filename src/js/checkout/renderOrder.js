export let totalprice = 0;

export function renderOrderList() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.querySelector(".checkout-list-will-come-here");
  const amountElem = document.querySelector(".amount");
  const totalElem = document.querySelector(".totalprice");

  let amount = 0;
  container.innerHTML = "";

  cart.forEach((item) => {
    const quantity = item.quantity || 1;
    const price = parseFloat(item.price);
    const itemTotal = quantity * price;
    amount += itemTotal;

    const html = `
      <div class="flex bg-white rounded-2xl p-3 mb-4 shadow">
        <div class="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center">
          <img src="${item.imageURL}" class="w-20" alt="${item.name}" />
        </div>
        <div class="ml-4 flex-1">
          <h1 class="text-lg font-bold">${item.name}</h1>
          <div class="flex items-center gap-2 text-sm mt-1">
            <div class="w-4 h-4 rounded-full" style="background-color: ${item.color};"></div>
            <p>${item.color}</p>
            <span class="mx-2">|</span>
            <p>Size = ${item.size}</p>
          </div>
          <div class="flex justify-between items-center mt-2">
            <h3 class="text-md font-semibold text-gray-800">$${itemTotal.toFixed(2)}</h3>
            <div class="bg-gray-200 px-3 py-1 rounded-full">${quantity}</div>
          </div>
        </div>
      </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });

  totalprice = amount;
  amountElem.innerText = `$${amount.toFixed(2)}`;
  totalElem.innerText = `$${totalprice.toFixed(2)}`;
}