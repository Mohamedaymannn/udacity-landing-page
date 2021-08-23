// Start Define Global Variables

let header = document.querySelector(".page__header");
let uList = document.querySelector("nav ul");
let sections = document.querySelectorAll("section");
let scrollbutton = document.querySelector("i.scroll-top");
let toggleButton = document.querySelector(".bullets");

// End Define Global Variables

// Toggle Button
toggleButton.addEventListener("click", () => {
  uList.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

// Start build the nav
for (let i = 1; i <= 5; i++) {
  let list = document.createElement("li");
  let anchorChild = document.createElement("a");

  let anchorContent = document.createTextNode(`Section ${i}`);
  anchorChild.href = `#section${i}`;

  anchorChild.appendChild(anchorContent);
  list.appendChild(anchorChild);
  uList.appendChild(list);
}
// End build the nav

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", setActiveToSection);

function setActiveToSection() {
  sections.forEach((cur) => {
    cur.getBoundingClientRect().top >= 0
      ? (cur.className = "active")
      : (cur.className = "");
  });
}

// Start Scroll To Top Button
window.onscroll = () => {
  window.scrollY >= 300
    ? scrollbutton.classList.add("active")
    : scrollbutton.classList.remove("active");
};

scrollbutton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// End Scroll To Top Button

// Hide fixed navigation bar while not scrolling
function hideNav() {
  setInterval(function () {
    header.classList.add("active");
  }, 20000);
}

window.onscroll = () => {
  header.classList.remove("active");
};

hideNav();
