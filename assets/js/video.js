const video = document.getElementById("heroVideo");

let started = false;

// Video loop attribute se loop karegi
video.loop = true;

// 1️⃣ Start video on FIRST SCROLL
window.addEventListener(
  "scroll",
  () => {
    if (started) return;

    started = true;
    video.play().catch(() => {});
  },
  { once: true }
);
