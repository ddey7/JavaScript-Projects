function createheart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 8 + "rem";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "😂";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createheart, 500);
