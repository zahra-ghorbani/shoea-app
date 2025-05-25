import '../style.css';
import { signup, backToSlider as backToSliderSignup } from './signup.js';
import { setupLogin, backToSlider as backToSliderLogin } from './login.js';
import { initUI } from './uiLogin.js';

window.onload = () => {
  initUI();

  const pathname = window.location.pathname;

  if (pathname.includes("signup")) {
    window.signup = signup;
    window.backToSlider = backToSliderSignup;
  } else if (pathname.includes("login")) {
    setupLogin();
    window.backToSlider = backToSliderLogin;
  }
};

