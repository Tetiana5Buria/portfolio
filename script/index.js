document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  /* burger */
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    const clickedOutside =
      !navLinks.contains(e.target) && !burger.contains(e.target);
    if (clickedOutside) {
      navLinks.classList.remove("active");
    }
  });
});

/* about me */
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  reveals.forEach((el) => {
    observer.observe(el);
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
    window.removeEventListener("scroll", arguments.callee);
  }
});
