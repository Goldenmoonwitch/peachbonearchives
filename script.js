.peach {
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  cursor: pointer;
  animation: floatPeach 2.5s ease-in-out infinite;
  transition: top 1s ease-in;
  z-index: 2;
  filter: drop-shadow(0 0 6px #ffb6c1);
}

@keyframes floatPeach {
  0%, 100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -12px);
  }
}


