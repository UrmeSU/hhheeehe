let currentPage = 1;

function nextPage(page) {
  // আগের page hide করো
  document.getElementById("page" + currentPage).classList.remove("active");
  document.getElementById("page" + currentPage).classList.add("hidden");

  // নতুন page show করো
  document.getElementById("page" + page).classList.remove("hidden");
  document.getElementById("page" + page).classList.add("active");

  currentPage = page;

  // Extra features trigger
  if(page === 3) typingEffect();
  if(page === 4) startSlideshow();
  if(page === 7) startConfetti();
}

// Page 2 No button escape
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
});

// Typing effect
function typingEffect() {
  const text = "Happy Birthday My Love ❤️\nAmar Jamai, Amar Bachchaaa 🥰";
  let i = 0;
  const typing = document.getElementById("typing");
  typing.innerHTML = "";
  const interval = setInterval(() => {
    typing.innerHTML += text.charAt(i);
    i++;
    if(i >= text.length) clearInterval(interval);
  }, 100);
}

// Slideshow
let slideIndex = 0;
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  setInterval(() => {
    slides.forEach(s => s.classList.add("hidden"));
    slides[slideIndex].classList.remove("hidden");
    slideIndex = (slideIndex + 1) % slides.length;
  }, 3000);
}

// Confetti
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = Array.from({length: 100}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 2 + 1
  }));

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#ff4d88";
    confettiPieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });
    update();
  }

  function update() {
    confettiPieces.forEach(p => {
      p.y += p.d;
      if(p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 30);
}
