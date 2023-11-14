import "./index.css";

const navLinks = document.querySelectorAll(".link-to");

function highlightNavLink() {
  const scrollPosition = window.scrollY;
  console.log("test");

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const sectionTop = targetSection.offsetTop;
      const sectionBottom = sectionTop + targetSection.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", highlightNavLink);

highlightNavLink();

const portfolioItems = document.querySelectorAll(".portfolio-item");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

portfolioItems.forEach((item) => {
  const imgElement = item.querySelector("img");
  const imageUrl = imgElement.src;

  item.addEventListener("click", () => {
    openModal(imageUrl);
  });
});

function openModal(imageUrl) {
  console.log("hello");
  modalImage.src = imageUrl;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
