document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("toggle-theme");
  let isNight = false;

  button.addEventListener("click", function() {
    if (isNight) {
      document.body.style.background = "url('/Joshi/assets/images/minecraft-day-wide.jpg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      isNight = false;
    } else {
      document.body.style.background = "url('/Joshi/assets/images/minecraft-night-wide.jpg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      isNight = true;
    }
  });
});
