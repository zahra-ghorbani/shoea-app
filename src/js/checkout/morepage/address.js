document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
  
  const addresses = [
    { label: "Home", address: "61480 Sunbrook Park, PC 5679" },
    { label: "Office", address: "6993 Meadow Valley Terra, PC 3637" },
    { label: "Apartment", address: "21833 Clyde Gallagher, PC 4662" },
    { label: "Parent's House", address: "5259 Blue Bill Park, PC 4627" },
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    const selectedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
  
    if (selectedAddress) {
      // پیدا کردن index از localStorage برای اعمال radio
      const index = addresses.findIndex(
        (addr) =>
          addr.label === selectedAddress.label &&
          addr.address === selectedAddress.address
      );
      if (index !== -1) {
        const input = document.querySelector(
          `input[name="address"][value="${index}"]`
        );
        if (input) input.checked = true;
      }
    } else {
      // اگر انتخاب نشده بود، مقدار پیش‌فرض
      const firstInput = document.querySelector(`input[name="address"][value="0"]`);
      if (firstInput) firstInput.checked = true;
    }
  });
  
  document.getElementById("applyAddress").addEventListener("click", () => {
    const selected = document.querySelector("input[name='address']:checked");
    if (selected) {
      const index = Number(selected.value);
      const selectedAddress = addresses[index];
      localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
      window.location.href = "checkout.html";
    }
  });