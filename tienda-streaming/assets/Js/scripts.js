document.addEventListener("DOMContentLoaded", () => {
  fetch("/partials/navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      // Esperamos a que el contenido esté en el DOM
      const toggle = document.getElementById("menu-toggle");
      const menu = document.getElementById("mobile-menu");

      if (toggle && menu) {
        toggle.addEventListener("click", () => {
          menu.classList.toggle("hidden");
        });
      }
    });
});
