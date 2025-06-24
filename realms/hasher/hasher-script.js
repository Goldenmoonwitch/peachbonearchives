// hasher-script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hasherverse script loaded.");

  const candy = document.querySelector(".side-image img");
  const audio = new Audio("audio/hasher-theme.mp3");

  if (candy) {
    candy.addEventListener("mouseenter", () => {
      audio.currentTime = 0;
      audio.play();
    });

    candy.addEventListener("mouseleave", () => {
      audio.pause();
      audio.currentTime = 0;
    });

    candy.addEventListener("click", () => {
      window.location.href = "https://goldenmoonwitch.github.io/realms/hasher/"; // Change if needed
    });
  }
});

