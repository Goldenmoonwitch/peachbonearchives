// hasher-script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hasherverse script loaded.");

  const title = document.querySelector(".glitchstab");

  if (title) {
    title.addEventListener("mouseover", () => {
      title.style.textShadow =
        "0 0 5px #ff00cc, 0 0 15px #00ffff, 0 0 25px #ff00cc, 0 0 35px #00ffff";
    });

    title.addEventListener("mouseout", () => {
      title.style.textShadow =
        "0 0 5px #e75480, 0 0 10px #ff69b4, 0 0 20px #e75480, 0 0 40px #ff69b4, 0 0 80px #e75480";
    });
  }
});

