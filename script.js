const STUDY_URL = "https://study-app-kappa-indol.vercel.app/";

const consent = document.getElementById("consent");
const declined = document.getElementById("declined");
const progress = document.getElementById("progress");

document.getElementById("agree").addEventListener("click", () => {
  window.location.href = STUDY_URL;
});

document.getElementById("decline").addEventListener("click", () => {
  consent.hidden = true;
  declined.hidden = false;
  declined.classList.add("fade-in");
  window.scrollTo({ top: 0 });
  document.getElementById("thanks").focus();
  updateProgress();
});

document.getElementById("reconsider").addEventListener("click", () => {
  declined.hidden = true;
  consent.hidden = false;
  consent.classList.add("fade-in");
  document.getElementById("decision").scrollIntoView();
  updateProgress();
});

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
