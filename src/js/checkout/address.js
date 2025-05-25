export function loadSelectedAddress() {
    const addressData = JSON.parse(localStorage.getItem("selectedAddress"));
    if (!addressData) return;
  
    const titleElement = document.querySelector(".addresstitle");
    const detailElement = document.querySelector(".addessdetail");
  
    if (titleElement && detailElement) {
      titleElement.innerText = addressData.label;
      detailElement.innerText = addressData.address;
    }
  }