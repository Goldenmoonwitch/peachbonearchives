document.addEventListener("DOMContentLoaded", () => {
  console.log("Hasherverse loaded.");

  const candyIcon = document.getElementById("candy-icon");
  const hoverAudio = document.getElementById("hover-audio");

  if (candyIcon && hoverAudio) {
    candyIcon.addEventListener("mouseenter", () => {
      hoverAudio.currentTime = 0;
      hoverAudio.play();
    });

    candyIcon.addEventListener("mouseleave", () => {
      hoverAudio.pause();
      hoverAudio.currentTime = 0;
    });
  }
});
