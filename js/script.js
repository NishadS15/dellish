// const toggleButton = document.getElementsByClassName('toggle-btn')[0]
// const navbarLinks = document.getElementsByClassName('nav-bar')[0]
// const navMenu = document.getElementsByClassName('menu')

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// });

function openMenu() {
  document.getElementById("nav-bar").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.toggle-btn')) {
  var myDropdown = document.getElementById("nav-bar");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// ==========================
// Smooth scrolling animation
const allLinks = document.querySelectorAll(".link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});