let slideIndex = 0;
const slides = document.getElementById("slides");
const nextBtn = document.getElementById("nextBtn");

function updateIndicators(index) {
  for (let i = 0; i < 3; i++) {
    const dot = document.getElementById(`dot${i}`);
    dot.classList.remove('bg-black');
    dot.classList.add('bg-[#DEE1E6]');
  }
  const activeDot = document.getElementById(`dot${index}`);
  activeDot.classList.remove('bg-[#DEE1E6]');
  activeDot.classList.add('bg-black');
}

function nextSlide() {
  slideIndex++;
  if (slideIndex < 3) {
    slides.style.transform = `translateX(-${428 * slideIndex}px)`;
    updateIndicators(slideIndex);
    if (slideIndex === 2) nextBtn.innerText = "Get Started";
    nextBtn.style.width="78px"
  } else {
    window.location.href = "signup.html";
  }
}
document.addEventListener("DOMContentLoaded", function(){
  nextBtn.addEventListener("click", nextSlide);
})