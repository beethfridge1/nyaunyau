document.addEventListener("mousemove", function(e) {

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  // random offset
  const offsetX = (Math.random() - 0.5) * 32;
  const offsetY = (Math.random() - 0.5) * 40;

  // drift direction (this creates the "floating" effect)
  const driftX = (Math.random() - 0.5) * 40;
  const driftY = (Math.random() - 0.5) * 40;

  const size = Math.random() * 10 + 4;
sparkle.style.width = size + "px";
sparkle.style.height = size + "px";

  const duration = Math.random() * 0.5 + 0.5;
  sparkle.style.animationDuration = duration + "s";
  
  sparkle.style.left = (e.clientX + offsetX) + "px";
  sparkle.style.top = (e.clientY + offsetY) + "px";

  // pass drift to CSS
  sparkle.style.setProperty("--driftX", driftX + "px");
  sparkle.style.setProperty("--driftY", driftY + "px");

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);

  const text = document.getElementById("floatingText");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

// track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// animation loop
function animate() {
  // smooth follow (lag effect)
  posX += (mouseX - posX) * 0.08;
  posY += (mouseY - posY) * 0.08;

  // random drift
  const driftX = (Math.random() - 0.5) * 10;
  const driftY = (Math.random() - 0.5) * 10;

  text.style.left = (posX + driftX) + "px";
  text.style.top = (posY + driftY) + "px";

  requestAnimationFrame(animate);
}

animate();

  const text = document.getElementById("floatingText");

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  posX += (mouseX - posX) * 0.05;
  posY += (mouseY - posY) * 0.05;

  text.style.left = posX + "px";
  text.style.top = posY + "px";

  requestAnimationFrame(animate);
}

animate();
});
