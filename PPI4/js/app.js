function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

function changeBackground() {
  const colors = ['#f4f4f9', '#e6f3fa', '#f0e6fa', '#e6fae6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Quote Rotator
function rotateQuotes() {
  const quotes = [
    "Creativity is intelligence having fun. – Albert Einstein",
    "Art is not what you see, but what you make others see. – Edgar Degas",
    "Every artist was first an amateur. – Ralph Waldo Emerson",
    "Imagination is the beginning of creation. – George Bernard Shaw"
  ];
  const quoteElement = document.getElementById('quote-text');
  if (!quoteElement) return; // Skip if not on About page
  let index = 0;
  quoteElement.textContent = quotes[index];
  setInterval(() => {
    quoteElement.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % quotes.length;
      quoteElement.textContent = quotes[index];
      quoteElement.style.opacity = 1;
    }, 500);
  }, 5000);
}

// Confetti Animation
function triggerConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'confetti-container';
  document.body.appendChild(confettiContainer);
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.backgroundColor = ['#ff0', '#f00', '#0f0', '#00f'][Math.floor(Math.random() * 4)];
    confettiContainer.appendChild(confetti);
  }
  setTimeout(() => confettiContainer.remove(), 3000);
}

// Run quote rotator on page load
document.addEventListener('DOMContentLoaded', rotateQuotes);
