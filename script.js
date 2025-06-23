function dropPeach(cupId) {
  const cup = document.getElementById(cupId);
  if (!cup.classList.contains("clicked")) {
    cup.classList.add("clicked");

    // Optional: Add sound or sparkle later
    console.log("Peach dropped into: " + cupId);
  }
}
