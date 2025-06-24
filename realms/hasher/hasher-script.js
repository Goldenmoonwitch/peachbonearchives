document.addEventListener("DOMContentLoaded", () => {
  const candy = document.getElementById("candyImage");
  const sound = document.getElementById("hoverSound");

  if (candy && sound) {
    candy.addEventListener("mouseenter", () => {
      sound.currentTime = 0;
      sound.play();
    });

    candy.addEventListener("mouseleave", () => {
      sound.pause();
      sound.currentTime = 0;
    });
  }
});
