// hasher-script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hasherverse script loaded. Stay sharp, agent.");

  // Optional: Glitch hover pulse on title
  const title = document.querySelector(".glitchstab");
  if (title) {
    title.addEventListener("mouseover", () => {
      title.style.textShadow =
        "0 0 5px #ff00cc, 0 0 15px #00ffff, 0 0 25px #ff00cc, 0 0 35px #00ffff";
    });

    title.addEventListener("mouseout", () => {
      title.style.textShadow =
        "0 0 5px #ff00cc, 0 0 10px #ff00cc, 0 0 20px #00ffff, 0 0 40px #ff00cc, 0 0 80px #00ffff";
    });
  }

  // Placeholder for future agent form submission logic
  const agentForm = document.getElementById("agent-form");
  if (agentForm) {
    agentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Profile submission coming soon. Blood signature required.");
    });
  }
});
