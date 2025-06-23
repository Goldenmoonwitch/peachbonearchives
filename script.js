function dropPeach(cupId) {
  const peach = document.querySelector('.peach');
  const cup = document.getElementById(cupId);

  // Stop the float animation and prepare to drop
  peach.style.animation = 'none';
  peach.style.transition = 'top 1s ease-in';

  // Move the peach down toward the cup
  peach.style.top = '400px'; // adjust this value based on your layout

  // Glow the selected cup
  if (!cup.classList.contains('clicked')) {
    cup.classList.add('clicked');
  }

  console.log("Peach dropped into: " + cupId);
}
