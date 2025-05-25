const token = sessionStorage.getItem("token");

export async function getProducts({ page = 1, limit = 10, search = "", brands = [] }) {
  try {
    let url = `http://localhost:3000/sneaker?page=${page}&limit=20&search=${encodeURIComponent(search)}`;
    
    if (brands.length > 0) {
      url += `&brands=${brands.map(encodeURIComponent).join(",")}`;
    }

    const res = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (err) {
    console.error("Error fetching search results:", err);
    return { data: [] };
  }
}