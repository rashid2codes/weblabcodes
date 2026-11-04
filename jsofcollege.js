// Welcome Message
window.onload = function() {
alert("Welcome to GCET Jammu Website!");
};

// Student Login
function studentLogin() {
alert("Welcome to Student Login Portal!");
}

// Navigation Message
function showMessage(page) {
alert("You are visiting " + page + " page.");
}

// Current Year
document.getElementById("year").innerHTML = new Date().getFullYear();
const themeButton = document.getElementById("theme-toggle");

// Restore the saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeButton.textContent = "☀️ Light theme";
  themeButton.setAttribute("aria-pressed", "true");
}

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeButton.textContent = isDark ? "☀️ Light theme" : "🌙 Dark theme";
  themeButton.setAttribute("aria-pressed", String(isDark));
});