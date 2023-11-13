import "./index.css";

// Select the section you want to monitor the scroll for.
// Get all the navigation links
const navLinks = document.querySelectorAll(".link-to");

// Function to highlight the appropriate navigation link
function highlightNavLink() {
  const scrollPosition = window.scrollY;
  console.log("test");

  // Loop through each section and check if it's in view
  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const sectionTop = targetSection.offsetTop;
      const sectionBottom = sectionTop + targetSection.clientHeight;

      // Highlight the link if the section is in view
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

// Add a scroll event listener to highlight the appropriate link
window.addEventListener("scroll", highlightNavLink);

// Initial call to highlightNavLink to set the initial state
highlightNavLink();
