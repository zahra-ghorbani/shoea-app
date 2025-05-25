// src/js/ui.js
export function initUI() {
  const email = document.getElementById("email_signin");
  const password = document.getElementById("password_signin");
  const signInBtn = document.getElementById("sign_in_button");
  const eyeIcon = document.getElementById("eyeIcon");
  const emailBox = document.getElementById("emailBox");
  const passwordBox = document.getElementById("passwordBox");
  const emailIcon = document.getElementById("emailIcon");
  const lockIcon = document.getElementById("lockIcon");

  function togglePassword() {
    if (password.type === "password") {
      password.type = "text";
      eyeIcon.src = "pic/eye.png";
    } else {
      password.type = "password";
      eyeIcon.src = "pic/eye-slash-fill.png";
    }
  }

  window.toggleshowpsw = togglePassword;

  [email, password].forEach((input, index) => {
    const box = index === 0 ? emailBox : passwordBox;
    const icon = index === 0 ? emailIcon : lockIcon;

    input.addEventListener("focus", () => {
      box.classList.add("border", "border-black");
      input.classList.replace("text-[#6C757D]", "text-black");
      icon.style.filter = "brightness(0) saturate(100%)";
      if (index === 1) eyeIcon.style.filter = "brightness(0) saturate(100%)";
    });

    input.addEventListener("blur", () => {
      box.classList.remove("border", "border-black");
    });
  });

  function updateButtonState() {
    if (email.value.trim() !== "" && password.value.trim() !== "") {
      signInBtn.classList.remove("opacity-65", "cursor-not-allowed");
      signInBtn.classList.add("opacity-100", "cursor-pointer");
      signInBtn.disabled = false;
    } else {
      signInBtn.classList.add("opacity-65", "cursor-not-allowed");
      signInBtn.classList.remove("opacity-100", "cursor-pointer");
      signInBtn.disabled = true;
    } 
  }

  email.addEventListener("input", updateButtonState);
  password.addEventListener("input", updateButtonState);
}