const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 80) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

const video = document.getElementById("hero-video");
const startTime = 5;
const endTime = 46;

if (video) {
  video.addEventListener("loadedmetadata", () => {
    video.currentTime = startTime;

    video.play().catch(err => {
      console.log("Video nejde přehrát:", err);
    });
  });

  video.addEventListener("timeupdate", () => {
    if (video.currentTime >= endTime) {
      video.currentTime = startTime;
      video.play();
    }
  });
}
