
document.addEventListener("DOMContentLoaded", () => {
  const candy = document.getElementById("candy");
  const audio = document.getElementById("hasher-audio");

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
