// hasher-script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hasherverse script loaded. Stay sharp, agent.");

  // Glitch hover pulse on title (pink rose colors)
  const title = document.querySelector(".glitchstab");
  if (title) {
    title.addEventListener("mouseover", () => {
      title.style.textShadow =
        "0 0 10px #e75480, 0 0 24px #ff69b4, 0 0 40px #e75480, 0 0 70px #ff69b4";
    });

    title.addEventListener("mouseout", () => {
      title.style.textShadow =
        "0 0 5px #e75480, 0 0 10px #ff69b4, 0 0 20px #e75480, 0 0 40px #ff69b4, 0 0 80px #e75480";
    });
  }

  // Placeholder for future agent form logic
  const agentForm = document.getElementById("agent-form");
  if (agentForm) {
    agentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Profile submission coming soon. Blood signature required.");
    });
  }
});
