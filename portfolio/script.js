function toggleMenu() {
  const menu = document.querySelector(".side-links");
  const icon = document.querySelector(".side-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openResume() {
  var resumeWindow = window.open("Resume.pdf");
  if (resumeWindow === null) {
    alert("Unable to open the resume. Please check your browser settings.");
  }
}
