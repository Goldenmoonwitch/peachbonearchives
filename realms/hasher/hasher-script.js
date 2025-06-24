// hasher-script.js

document.addEventListener("DOMContentLoaded", () => {
  const candy = document.querySelector(".side-image img");
  const audio = new Audio("audio/hasher-theme.mp3"); // Update path if different

  if (candy) {
    candy.addEventListener("mouseenter", () => {
      audio.currentTime = 0;
      audio.play();
    });

    candy.addEventListener("mouseleave", () => {
      audio.pause();
      audio.currentTime = 0;
    });
  }
});
