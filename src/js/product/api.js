const token = sessionStorage.getItem("token");

export async function fetchProductById(productId) {
  try {
    const res = await fetch(`http://localhost:3000/sneaker/item/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Failed to load product");
    return await res.json();
  } catch (err) {
    console.error("API error:", err);
    return null;
  }
}
