document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("toggle-theme");

  // Leer el tema guardado en localStorage
  let theme = localStorage.getItem("theme");

  // Si no hay nada guardado, usar "day" por defecto
  if (!theme) {
    theme = "day";
    localStorage.setItem("theme", theme);
  }

  // Función para aplicar el tema
  function applyTheme() {
    if (theme === "night") {
      document.body.style.background = "url('/Joshi/assets/images/minecraft-night-wide.jpg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      button.textContent = "☀️"; // mostrar sol si está en modo noche
    } else {
      document.body.style.background = "url('/Joshi/assets/images/minecraft-day-wide.jpg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      button.textContent = "🌙"; // mostrar luna si está en modo día
    }
  }

  // Aplicar el tema al cargar la página
  applyTheme();

  // Alternar al hacer clic
  button.addEventListener("click", function() {
    theme = (theme === "night") ? "day" : "night";
    localStorage.setItem("theme", theme);
    applyTheme();
  });
});
