let discount = 0;

export function handlePromo() {
  const input = document.getElementById("promoInput");
  const promoContainer = document.getElementById("promoContainer");
  const amountElement = document.querySelector(".amount");
  const totalElement = document.querySelector(".totalprice");
  const shippingElement = document.querySelector(".shippingprice");

  document.getElementById("applyPromoBtn")?.addEventListener("click", () => {
    const code = input.value.trim().toLowerCase();
    const amount = parseFloat(amountElement.textContent.replace("$", "")) || 0;
    const shipping = parseFloat(shippingElement.textContent.replace("$", "")) || 0;

    if (code === "discount30") {
      discount = amount * 0.3;
      promoContainer.innerHTML = `
        <div class="flex items-center justify-between bg-black text-white rounded-full px-4 py-2 w-fit text-md font-medium">
          <span>Discount 30% Off</span>
          <button id="removePromo" class="ml-2 text-white text-base">×</button>
        </div>`;

      document.getElementById("discountSec")?.classList.remove("hidden");
      document.getElementById("discountAmount").textContent = `-$${discount.toFixed(2)}`;
      totalElement.textContent = `$${(amount + shipping - discount).toFixed(2)}`;

      document.getElementById("removePromo").addEventListener("click", () => {
        discount = 0;
        promoContainer.innerHTML = `
          <input id="promoInput" type="text" placeholder="Enter Promo Code"
            class="w-full text-sm bg-transparent focus:outline-none"/>`;
        document.getElementById("discountSec")?.classList.add("hidden");
        document.getElementById("discountAmount").textContent = "-$0.00";
        totalElement.textContent = `$${(amount + shipping).toFixed(2)}`;
      });
    } else {
      alert("Wrong promo code!");
    }
  });
}