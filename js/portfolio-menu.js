const filterButtons = document.querySelector(".filters");
const projects = document.querySelectorAll(".project-card");

function handleClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const selectedFilter = event.target.id;

  projects.forEach((project) => {
    if (project.id === selectedFilter || selectedFilter === "All") {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

filterButtons.addEventListener("click", handleClick);
