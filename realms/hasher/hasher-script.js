document.addEventListener("DOMContentLoaded", () => {
  const candy = document.getElementById("candyIcon");
  const audio = document.getElementById("hoverAudio");

  if (candy && audio) {
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
