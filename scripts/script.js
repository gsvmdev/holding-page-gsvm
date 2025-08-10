// Inicialização do FullPage.js
new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  navigationPosition: "right",
  scrollingSpeed: 900,
  verticalCentered: true,
});

// Animações GSAP ao entrar em cada slide
document.querySelectorAll(".section").forEach((section) => {
  section.addEventListener("mouseenter", () => {
    gsap.fromTo(
      section.querySelector("h1"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  });
});

// Efeito de digitação no primeiro slide
const typewriterText = document.querySelector(".typewriter");
if (typewriterText) {
  let text = typewriterText.textContent;
  typewriterText.textContent = "";
  let i = 0;
  setInterval(() => {
    if (i < text.length) {
      typewriterText.textContent += text.charAt(i);
      i++;
    }
  }, 100);
}
