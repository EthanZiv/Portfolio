console.log("Test");

const skillsTab = document.querySelector(".resume-1-text");
const resumeTab = document.querySelector(".resume-2-text");

const skillsBtn = document.querySelector(".resume-1");
const resumeBtn = document.querySelector(".resume-2");

const switchTab = (e) => {
    skillsTab.classList.remove("resume-active");
    resumeTab.classList.remove("resume-active");
    skillsBtn.classList.remove("active-button");
    resumeBtn.classList.remove("active-button");

    if (e.target.classList.contains("resume-1")) {
        skillsTab.classList.add("resume-active");
        skillsBtn.classList.add("active-button");
    } else {
        resumeTab.classList.add("resume-active");
        resumeBtn.classList.add("active-button");
    }
};

skillsBtn.addEventListener("click", switchTab);
resumeBtn.addEventListener("click", switchTab);


