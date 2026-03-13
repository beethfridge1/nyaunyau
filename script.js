document.addEventListener("mousemove", function(e) {

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  // random offset
  const offsetX = (Math.random() - 0.5) * 20;
  const offsetY = (Math.random() - 0.5) * 20;

  sparkle.style.left = (e.clientX + offsetX) + "px";
  sparkle.style.top = (e.clientY + offsetY) + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 600);

  
});
