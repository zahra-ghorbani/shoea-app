const token = sessionStorage.getItem("token");

export async function fetchUserInfo() {
  try {
    const res = await fetch("http://localhost:3000/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("User fetch failed");
    return await res.json();
  } catch (err) {
    console.error("Error fetching user info:", err);
    return null;
  }
}

export async function fetchSneakers(page = 1, brand = "") {
  let url = `http://localhost:3000/sneaker?page=${page}&limit=10`;
  if (brand && brand !== "mostpopular") {
    url += `&brands=${brand}`;
  }

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to load sneakers");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function fetchBrands() {
  try {
    const res = await fetch("http://localhost:3000/sneaker/brands", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}