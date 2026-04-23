const reveals = document.querySelectorAll(".reveal");

function reveal(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if(top < height - 80){
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();


const video = document.querySelector("video");

const startTime = 5;
const endTime = 46;  

video.addEventListener("loadedmetadata", () => {
  video.currentTime = startTime;
});

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= endTime) {
    video.currentTime = startTime;
  }
});