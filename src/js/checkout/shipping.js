export function loadSelectedShipping() {
    const shipping = JSON.parse(localStorage.getItem("selectedShipping"));
    if (!shipping) return;
  
    const shippingHTML = `
      <div class="shippig-mode flex justify-between items-center bg-white p-4 rounded-2xl mt-4 mx-2">
        <img src="${shipping.image}" width="60" class="rounded-xl" alt="${shipping.label} icon">
        <div class="ml-4 flex-1">
          <h2 class="text-lg font-bold">${shipping.label}</h2>
          <p class="text-sm text-gray-600">${shipping.shipping}</p>
        </div>
        <div class="flex gap-3 items-center">
          <h2 class="text-md font-semibold">$${shipping.cost}</h2>
          <a href="chooseshipping.html">
            <img width="25" src="/pic/edit.png" alt="edit" />
          </a>
        </div>
      </div>`;
  
    document.querySelector(".shippingmodecomehere").innerHTML = shippingHTML;
  
    const currentTotal = parseFloat(document.querySelector(".amount").textContent.replace("$", ""));
    document.querySelector(".totalprice").textContent = `$${(currentTotal + shipping.cost).toFixed(2)}`;
    document.querySelector(".shippingprice").textContent = `$${shipping.cost}`;
  }