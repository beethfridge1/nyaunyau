//szaros toas anim
const el = document.getElementById("switchItem");

let isImage = false;

el.addEventListener("click", () => {
  if (!isImage) {
    el.innerHTML = '<img src="toas.png" style="height:60px;">';
  } else {
    el.textContent = 'r';
  }
  isImage = !isImage;
});

// ------------------ SPARKLE CURSOR ------------------
document.addEventListener("mousemove", function(e) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  // random offset around cursor
  const offsetX = (Math.random() - 0.5) * 32;
  const offsetY = (Math.random() - 0.5) * 40;

  // drift for animation
  const driftX = (Math.random() - 0.5) * 40;
  const driftY = (Math.random() - 0.5) * 40;

  // random size
  const size = Math.random() * 10 + 4;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  // random duration
  const duration = Math.random() * 0.5 + 0.5;
  sparkle.style.animationDuration = duration + "s";

  // set initial position
  sparkle.style.left = (e.clientX + offsetX) + "px";
  sparkle.style.top = (e.clientY + offsetY) + "px";

  // pass drift to CSS
  sparkle.style.setProperty("--driftX", driftX + "px");
  sparkle.style.setProperty("--driftY", driftY + "px");

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
});

// ------------------ FLOATING TEXT ------------------
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

// Animate floating text
function animate() {
  // smooth follow
  posX += (mouseX - posX) * 0.08;
  posY += (mouseY - posY) * 0.08;

  // small random drift
  const driftX = (Math.random() - 0.5) * 10;
  const driftY = (Math.random() - 0.5) * 10;

  text.style.left = (posX + driftX) + "px";
  text.style.top = (posY + driftY) + "px";

  requestAnimationFrame(animate);
}

animate();

// ------------------ TOGGLE ON CLICK ------------------
const btn = document.getElementById("openContact");
btn.addEventListener("click", () => {
  text.classList.toggle("show");
});
