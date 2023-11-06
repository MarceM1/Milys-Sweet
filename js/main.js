//Cambio de color en navbar
const navbr = document.querySelector("#nav");
const links = document.querySelectorAll(".nav-link, #scrollTextColor");
const svg = document.querySelector("#Capa_1");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  const scrollYBg = window.scrollY;

  if (scrollYBg > 100) {
    navbr.classList.add("scrolled_bg");
    links.forEach((link) => {
      link.classList.add("text-white");
    });
    svg.setAttribute("fill", "white");
    logo.style.width = "87px";
    logo.style.height = "60px";
  } else {
    navbr.classList.remove("scrolled_bg");
    links.forEach((link) => {
      link.classList.remove("text-white");
    });
    svg.setAttribute("fill", "#555");
    logo.style.width = "150px";
    logo.style.height = "110px";
  }
});

//Animaciones de ScrollReveal
window.sr = ScrollReveal();

sr.reveal(".toright", {
  duration: 5000,
  origin: "right",
  distance: "-250px",
});
sr.reveal(".toleft", {
  duration: 4500,
  origin: "left",
  distance: "-250px",
});
sr.reveal(".todown", {
  duration: 3000,
  origin: "bottom",
  distance: "-200px",
});
sr.reveal(".toup", {
  duration: 4000,
  origin: "top",
  distance: "-250px",
});
sr.reveal(".todown2", {
  duration: 2500,
  origin: "bottom",
  distance: "-250px",
});

sr.reveal(".revealFast", {
  duration: 1500,
});

sr.reveal(".reveal", {
  duration: 3000,
});

sr.reveal(".revealSlow", {
  duration: 4500,
});

sr.reveal(".revealExtraSlow", {
  duration: 6000,
});
