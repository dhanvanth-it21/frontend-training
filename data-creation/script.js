// import { exportCreateElement } from "./generator.js";
// import { markdownOption, markdown } from "./data.js";

// window.addEventListener("load", () => {
//   exportCreateElement(markdown, document.body);
// });

// window.addEventListener("click", () => {
//     const add = document.querySelector(".markdown-add-option>button");
//   add.addEventListener("click", () => {
//     exportCreateElement(
//       markdownOption,
//       document.querySelector(".markdown-options")
//     );
//   });

//   const closeButton = document.querySelector(".markdown-option-close");
//   closeButton.addEventListener("click", () => {
//     document.querySelector(".markdown-options").remove();
//   });
// });


// Select all containers and the side container
const containers = document.querySelectorAll(".container");
const sideContainer = document.querySelector(".side-container");

// Function to handle the active state and position of the side container
function handleContainerClick(event) {
  // Remove 'active' class from all containers
  containers.forEach((container) => container.classList.remove("active"));

  // Add 'active' class to the clicked container
  const activeContainer = event.currentTarget;
  activeContainer.classList.add("active");

  // Get the position of the active container
  const rect = activeContainer.getBoundingClientRect();

  // Position the side container to the right of the active container
  sideContainer.style.left = `${rect.right + 10}px`; // 10px gap
  sideContainer.style.top = `${rect.top}px`;
  sideContainer.style.display = "block"; // Ensure it's visible
}

// Add click event listeners to all containers
containers.forEach((container) =>
  container.addEventListener("click", handleContainerClick)
);





