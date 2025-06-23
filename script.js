function dropPeach(cupId) {
  const peach = document.querySelector('.peach');
  const cup = document.getElementById(cupId);

  // Reset animation
  peach.style.animation = 'none';
  peach.offsetHeight; // force reflow
  peach.style.animation = null;

  // Drop effect
  peach.style.transition = 'top 1s ease-in';
  peach.style.top = '400px';

  // Highlight cup
  if (!cup.classList.contains('clicked')) {
    cup.classList.add('clicked');
  }

  console.log("Peach dropped into:", cupId);
}
