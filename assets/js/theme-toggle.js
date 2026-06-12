document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("toggle-theme");
  const metaThemeColor = document.querySelector("meta[name=theme-color]");

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

      // Cambiar color de la barra de navegación en móviles
      if (metaThemeColor) metaThemeColor.setAttribute("content", "#0d0d0d"); // negro suave
    } else {
      document.body.style.background = "url('/Joshi/assets/images/minecraft-day-wide.jpg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      button.textContent = "🌙"; // mostrar luna si está en modo día

      // Cambiar color de la barra de navegación en móviles
      if (metaThemeColor) metaThemeColor.setAttribute("content", "#87CEEB"); // azul cielo
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

