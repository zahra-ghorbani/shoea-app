import {
    setSelectedSize,
    setSelectedColor,
    getQuantity
  } from "./state.js";

export function updateTotalPrice(price) {
  const total = price * getQuantity();
  document.getElementById("productPrice").textContent = `$${total.toFixed(2)}`;
  document.getElementById("quantityDisplay").textContent = getQuantity();
}

export function renderDescription(text, container) {
  let expanded = false;

  function truncate(text, words = 15) {
    return text.split(" ").slice(0, words).join(" ") + " ";
  }

  function render() {
    container.innerHTML = expanded
      ? `${text} <span id="toggleBtn" class="font-bold cursor-pointer">show less...</span>`
      : `${truncate(text)}<span id="toggleBtn" class="font-bold cursor-pointer">view more...</span>`;

    document.getElementById("toggleBtn").onclick = () => {
      expanded = !expanded;
      render();
    };
  }

  render();
}

export function renderSizes(sizes, onSelect) {
  const sizeContainer = document.getElementById("sizeOptions");
  sizeContainer.innerHTML = "";

  sizes.forEach(size => {
    const btn = document.createElement("button");
    btn.className = "w-10 h-10 rounded-full border border-gray-800";
    btn.textContent = size;

    btn.onclick = () => {
        document.querySelectorAll("#sizeOptions button").forEach(b => {
          b.classList.remove("bg-black", "text-white");
        });
        btn.classList.add("bg-black", "text-white");
        setSelectedSize(size); // به‌جای selectedSize = size
      };

    sizeContainer.appendChild(btn);
  });
}

export function renderColors(colors, onSelect) {
  const colorContainer = document.getElementById("colorOptions");
  colorContainer.innerHTML = "";

  colors.forEach(color => {
    const dot = document.createElement("div");
    dot.className = "w-10 h-10 rounded-full cursor-pointer flex items-center justify-center";
    dot.style.backgroundColor = color;

    const check = document.createElement("span");
    check.innerHTML = "✔";
    check.className = "text-black-900 text-xl font-bold hidden";
    dot.appendChild(check);

    dot.onclick = () => {
      document.querySelectorAll("#colorOptions span").forEach(s => s.classList.add("hidden"));
      check.classList.remove("hidden");
      setSelectedColor(color);
    };

    colorContainer.appendChild(dot);
  });
}