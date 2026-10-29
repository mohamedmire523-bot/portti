// 1. Dark / light theme (remembered between pages)
const root = document.documentElement;
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  root.setAttribute("data-bs-theme", theme);
  themeIcon.classList.toggle("fa-moon", theme === "light");
  themeIcon.classList.toggle("fa-sun", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {}
}

applyTheme(root.getAttribute("data-theme") || "light");

themeToggleBtn.addEventListener("click", () => {
  applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light");
});

// 2. Gallery photo preview (gallery.html)
function openModal(title, imgSrc, caption) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("modalCaption").innerText = caption;
  new bootstrap.Modal(document.getElementById("galleryModal")).show();
}

// Let keyboard users open a photo with Enter or Space
document.querySelectorAll(".gallery-img-container").forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      el.click();
    }
  });
});

// 3. Contact form (contact.html)
function handleFormSubmit(event) {
  event.preventDefault();
  const alertBox = document.getElementById("formAlert");
  alertBox.classList.remove("d-none");
  document.getElementById("portfolioContactForm").reset();
  setTimeout(() => alertBox.classList.add("d-none"), 4000);
}
