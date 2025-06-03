function openInvitation() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

// Countdown
const countDownDate = new Date("June 22, 2025 09:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);


// Floating flower effect (optional)
const flowerContainer = document.getElementById("floatingFlowers");
const emojis = ["🌸", "🌺", "🌼", "🌷","💐","🌹"];

for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.top = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${4 + Math.random() * 4}s`;
    flowerContainer.appendChild(flower);
}

// Music toggle (placeholder only)
let isPlaying = false;
const music = document.getElementById("bg-music");
function toggleMusic() {
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
    isPlaying = !isPlaying;
}

    // Mainkan musik setelah user klik tombol
    music.play().then(() => {
        isPlaying = true;
    }).catch((err) => {
        console.log("Autoplay ditolak oleh browser:", err);
    });


