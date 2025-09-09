// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Back to Top
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Welcome Alert
document.addEventListener("DOMContentLoaded", () => {
  alert("🌞 Welcome! Explore Yoga, Meditation & Health Benefits");
});
