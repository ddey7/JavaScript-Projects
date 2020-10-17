const text = "Hii My name is Debojyoti";

let index = 0;

function writetext() {
  document.body.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(writetext, 150);
