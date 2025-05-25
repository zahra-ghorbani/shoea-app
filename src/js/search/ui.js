import { getRecentTerms } from './recent.js';

export function renderRecent(container, listElement, onSearch) {
  listElement.innerHTML = "";

  const recentTerms = getRecentTerms();
  if (!recentTerms.length) {
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");

  recentTerms.forEach(term => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center py-2 border-b";

    const left = document.createElement("div");
    left.className = "flex items-center gap-2";
    
    const icon = document.createElement("img");
    icon.src = "/pic/icons8-search-30.png";
    icon.className = "w-4 h-4";

    const btn = document.createElement("button");
    btn.textContent = term;
    btn.className = "text-sm text-[#343A40]";
    btn.onclick = () => onSearch(term);

    left.append(icon, btn);

    const del = document.createElement("button");
    del.textContent = "×";
    del.className = "text-gray-400 px-2";
    del.onclick = () => {
      const updated = getRecentTerms().filter(t => t.trim().toLowerCase() !== term.trim().toLowerCase());
      localStorage.setItem("recentSearches", JSON.stringify(updated));
      renderRecent(container, listElement, onSearch);
    };

    li.append(left, del);
    listElement.appendChild(li);
  });
}