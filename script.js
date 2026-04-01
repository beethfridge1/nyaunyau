// ------------------ Sparkle ------------------
document.addEventListener("mousemove", function(e) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  const offsetX = (Math.random() - 0.5) * 32;
  const offsetY = (Math.random() - 0.5) * 40;

  const driftX = (Math.random() - 0.5) * 40;
  const driftY = (Math.random() - 0.5) * 40;

  const size = Math.random() * 10 + 4;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  const duration = Math.random() * 0.5 + 0.5;
  sparkle.style.animationDuration = duration + "s";

  sparkle.style.left = (e.clientX + offsetX) + "px";
  sparkle.style.top = (e.clientY + offsetY) + "px";

  sparkle.style.setProperty("--driftX", driftX + "px");
  sparkle.style.setProperty("--driftY", driftY + "px");

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
});

// ------------------ Floating Text ------------------
const text = document.getElementById("floatingText");

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

// Track mouse globally
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate text following the cursor with drift
function animate() {
  posX += (mouseX - posX) * 0.08;
  posY += (mouseY - posY) * 0.08;

  const driftX = (Math.random() - 0.5) * 10;
  const driftY = (Math.random() - 0.5) * 10;

  text.style.left = (posX + driftX) + "px";
  text.style.top = (posY + driftY) + "px";

  requestAnimationFrame(animate);
}

animate();

// ------------------ Toggle show on click ------------------
const btn = document.getElementById("openContact");
btn.addEventListener("click", () => {
  text.classList.toggle("show");
});
