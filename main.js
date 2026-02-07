onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("container");
    clearTimeout(c);
  }, 1000);

  // Generate Fireflies (romantic pink glow)
  const fireflyCount = 40;
  for (let i = 0; i < fireflyCount; i++) {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    firefly.style.left = Math.random() * 100 + "%";
    firefly.style.top = Math.random() * 100 + "%";
    firefly.style.animationDelay = Math.random() * 5 + "s";
    firefly.style.animationDuration = 5 + Math.random() * 10 + "s";
    document.body.appendChild(firefly);
  }

  // Click to spread magic
  document.addEventListener("click", (e) => {
    createSparkle(e.clientX, e.clientY);
  });
};

function createSparkle(x, y) {
  const sparkleCount = 18;
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    
    // Random direction and distance for sparkles
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50; // Spread out more
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    document.body.appendChild(sparkle);
    
    // Use Web Animations API for dynamic movement
    const animation = sparkle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
    ], {
      duration: 800 + Math.random() * 400,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: Math.random() * 100
    });
    
    animation.onfinish = () => sparkle.remove();
  }
}
