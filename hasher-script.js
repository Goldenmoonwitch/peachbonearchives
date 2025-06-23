let bleedLevel = 0;

function bleedCard() {
  const card = document.getElementById("agentCard");
  bleedLevel += 1;

  // Add class if not present
  if (!card.classList.contains("bloody")) {
    card.classList.add("bloody");
  }

  // Intensify bleed filter gradually
  card.style.filter = `hue-rotate(${330 + bleedLevel}deg) brightness(${1 - bleedLevel * 0.01}) saturate(${1 + bleedLevel * 0.1}) drop-shadow(0 0 ${5 + bleedLevel}px red)`;

  if (bleedLevel > 20) {
    card.style.filter = `drop-shadow(0 0 20px crimson) brightness(0.6) saturate(3)`;
  }
}
