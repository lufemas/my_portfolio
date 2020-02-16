const aboutSection = document.getElementById("about-section");
const resumeSection = document.getElementById("resume-section");

const btnResume = document.getElementById("btn-resume");

btnResume.onclick = () => {
  aboutSection.style.display = "none";
  resumeSection.style.display = "grid";
  btnResume.style.backgroundColor = "var(--bg-color-1)";
}