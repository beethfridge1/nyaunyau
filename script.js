document.addEventListener("mousemove", function(e) {

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(sparkle);

const size = Math.random() * 6 + 4;
sparkle.style.width = size + "px";
sparkle.style.height = size + "px";
sparkle.style.transform = `rotate(${Math.random()*360}deg)`;
  
  setTimeout(() => {
    sparkle.remove();
  }, 600);

});
