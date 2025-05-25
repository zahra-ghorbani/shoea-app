import { initUI } from "./uiLogin.js";

export function setupLogin() {
  initUI(); //  UI مشترک

  const signInBtn = document.getElementById("sign_in_button");
  const email = document.getElementById("email_signin");
  const password = document.getElementById("password_signin");

  signInBtn.addEventListener("click", async function () {
    const username = email.value.trim();
    const pwd = password.value.trim();

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password: pwd })
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok && data.token) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("username", data.user.username);
        window.location.href = "home.html";
      } else {
        alert("Login failed: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      alert("Error connecting to server.");
      console.error(err);
    }
  });
}


export function backToSlider() {
  window.location.pathname = "/js/slider.html";
}