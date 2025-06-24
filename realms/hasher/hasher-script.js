document.addEventListener("DOMContentLoaded", () => {
  console.log("Hasherverse script ready.");

  const candyImg = document.getElementById("hasher-candy");
  if (candyImg) {
    candyImg.addEventListener("click", () => {
      // Redirect to main hasher subpage or GitHub page
      window.location.href = "https://goldenmoonwitch.github.io/peachbonearchives/realms/hasher/";
    });
  }
});
