// src/js/signin.js

export function signup() {
  const username = document.getElementById("email_signin").value.trim();
  const password = document.getElementById("password_signin").value.trim();

  fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then(data => {
      alert("Signup successful!");
      window.location.href = "login.html";
    })
    .catch(async (err) => {
      let message = await err.text();
      alert("The password OR username is invalid");
    });
}

export function backToSlider() {
  window.location.pathname = "/js/slider.html";
}