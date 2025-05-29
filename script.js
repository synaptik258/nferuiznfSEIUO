document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 40; i++) {
    setTimeout(createPetal, i * 100);
  }
});

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${5 + Math.random() * 5}s`;
  petal.style.opacity = Math.random() * 0.6 + 0.4;
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
    createPetal();
  }, (parseFloat(petal.style.animationDuration) + 1) * 1000);
}
