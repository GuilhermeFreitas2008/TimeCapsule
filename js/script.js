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