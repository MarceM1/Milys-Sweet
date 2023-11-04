const navbr = document.querySelector("#nav");
const links = document.querySelectorAll(".nav-link, #scrollTextColor");
const svg = document.querySelector('#Capa_1')
const logo = document.querySelector('.logo')

window.addEventListener("scroll", () => {
  const scrollYBg = window.scrollY;

  if (scrollYBg > 100) {
    navbr.classList.add("scrolled_bg");
    links.forEach((link) => {
      link.classList.add("text-white");
    });
    svg.setAttribute("fill", "white");
    logo.style.width = '95px';
    logo.style.height = '70px';
  } else {
    navbr.classList.remove("scrolled_bg");
    links.forEach((link) => {
      link.classList.remove("text-white");
    });
    svg.setAttribute("fill", "#555");
    logo.style.width = '150px';
    logo.style.height = '110px';
  }
});
