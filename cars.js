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

  // načtení uloženého času
  video.addEventListener("loadedmetadata", () => {
    const savedTime = localStorage.getItem("videoTime");
    video.currentTime = savedTime ? savedTime : startTime;
  });

  // ukládání času
  video.addEventListener("timeupdate", () => {
    localStorage.setItem("videoTime", video.currentTime);

    if (video.currentTime >= endTime) {
      video.currentTime = startTime;
    }
  });

}
