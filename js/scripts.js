document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Logic
  const themeToggleButton = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      htmlElement.classList.toggle("dark-theme");
      const isDark = htmlElement.classList.contains("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // Hamburger Menu Logic
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileNav = document.getElementById("mobile-nav");

  if (hamburgerButton && mobileNav) {
    hamburgerButton.addEventListener("click", () => {
      const isOpened = mobileNav.classList.toggle("is-open");
      hamburgerButton.setAttribute("aria-expanded", isOpened);
    });
  }
});
