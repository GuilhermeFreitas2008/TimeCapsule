function initNavbar() {
  // seu código que liga os listeners ao .dropdown, etc.
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}

// Importa a navbar automaticamente em todas as páginas
document.addEventListener("DOMContentLoaded", function() {
  const placeholder = document.getElementById("navbar-placeholder");
  if (placeholder) {
    fetch("../includes/navbar.html")
      .then(res => res.text())
      .then(data => {
        placeholder.innerHTML = data;
      });
  }
});