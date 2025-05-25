export function sayGood(selector) {
    const hour = new Date().getHours();
    selector.textContent =
      hour < 12 ? "Good Morning 👋" :
      hour < 18 ? "Good Afternoon 👋" : "Good Evening 👋";
  }
  
  export function renderCard({ id, imageURL, name, price }) {
    return `
      <div id="productCard" class="bg-transparent p-1 w-[182px] h-[244px]" data-id="${id}">
        <div class="flex items-center justify-center">
          <img class="w-40 h-40 rounded-2xl" src="${imageURL}" />
        </div>
        <div class="card-text-wrapper">
          <p class="text-lg font-medium m-2 overflow-hidden truncate cursor-pointer hover:underline card-profile">${name}</p>
        </div>
        <p class="text-gray-700 mx-2">$${price}</p>
      </div>`;
  }