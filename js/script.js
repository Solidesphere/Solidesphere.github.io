function runTypingEffect() {
  const text = "i am Mohamed Amine Kahil";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;

  typetext(text, typingElement, typingDelay);
}

function typetext(text, typingElement, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, typingDelay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
