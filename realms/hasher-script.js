document.addEventListener("DOMContentLoaded", () => {
  const candy = document.getElementById("candy");

  if (candy) {
    candy.addEventListener("mouseover", () => {
      const audio = new Audio("hasher-theme.mp3");
      audio.play();
    });
  }

  console.log("Hasherverse script loaded.");
});
