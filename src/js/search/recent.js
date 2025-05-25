export function saveSearchTerm(term) {
  const normalized = term.trim().toLowerCase();
  let recentTerms = JSON.parse(localStorage.getItem("recentSearches") || "[]");

  if (!recentTerms.some(t => t.trim().toLowerCase() === normalized)) {
    recentTerms.unshift(term);
    if (recentTerms.length > 10) recentTerms.pop();
    localStorage.setItem("recentSearches", JSON.stringify(recentTerms));
  }
}

export function getRecentTerms() {
  return JSON.parse(localStorage.getItem("recentSearches") || "[]");
}

export function clearRecentTerms() {
  localStorage.removeItem("recentSearches");
}