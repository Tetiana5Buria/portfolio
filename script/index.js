/* burger-menu */
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

/* skills */
window.addEventListener("scroll", function () {
  const skillsSection = document.getElementById("Skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    const bars = document.querySelectorAll(".progress_bar");
    for (let i = 0; i < bars.length; i++) {
      const span = bars[i].querySelector("span");
      const percent = bars[i].getAttribute("data-percentage");
      span.style.width = percent + "%";
      span.style.background = "linear-gradient(45deg, #272929, #0ef)";
    }

    // Знімаємо слухач, щоб не запускати знову
    window.removeEventListener("scroll", arguments.callee);
  }
});
