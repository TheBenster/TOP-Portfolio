import "./index.css";

// Select the section you want to monitor the scroll for.
const aboutPage = document.getElementById("about-page");

// Define a function to perform the action.
function doSomethingOnScroll() {
  const scrollPosition = window.scrollY;
  const aboutPageTop = aboutPage.getBoundingClientRect().top;

  if (scrollPosition > aboutPageTop) {
    alert("User has scrolled to the 'about' section");
  } else {
    alert("User hasn't scrolled to the 'about' section yet");
  }
}

// Add an event listener to the window for the scroll event.
window.addEventListener("scroll", doSomethingOnScroll);
