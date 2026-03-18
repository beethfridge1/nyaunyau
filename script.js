document.addEventListener("mousemove", function(e) {

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  // random offset
  const offsetX = (Math.random() - 0.5) * 32;
  const offsetY = (Math.random() - 0.5) * 40;

  // drift direction (this creates the "floating" effect)
  const driftX = (Math.random() - 0.5) * 40;
  const driftY = (Math.random() - 0.5) * 40;

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
