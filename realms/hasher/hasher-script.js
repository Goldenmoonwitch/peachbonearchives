document.addEventListener("DOMContentLoaded", () => {
  const candyImage = document.getElementById("hasher-icon");
  const themeAudio = document.getElementById("hasher-audio");

  if (candyImage && themeAudio) {
    // Play audio on hover
    candyImage.addEventListener("mouseenter", () => {
      themeAudio.currentTime = 0;
      themeAudio.play();
    });

    // Stop audio on mouse leave
    candyImage.addEventListener("mouseleave", () => {
      themeAudio.pause();
      themeAudio.currentTime = 0;
    });

    // Open hasher site on click (replace with your link)
    candyImage.addEventListener("click", () => {
      window.location.href = "/realms/hasher/index.html";
    });
  }
});
