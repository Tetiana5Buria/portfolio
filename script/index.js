/* burger menu */
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  if (burger && navLinks) {
    burger.addEventListener("click", (e) => {
      e.stopPropagation();

      burger.classList.toggle("is-active");
      navLinks.classList.toggle("active");
      document.body.classList.toggle("navLinksOpen");
    });

    document.addEventListener("click", (e) => {
      const clickedOutside =
        !navLinks.contains(e.target) && !burger.contains(e.target);

      if (clickedOutside) {
        burger.classList.remove("is-active");
        navLinks.classList.remove("active");
        document.body.classList.remove("navLinksOpen");
      }
    });
  }
});
/* parallax */
const container = document.querySelector(".container");
let latestScroll = 0;
let ticking = false;

function onScroll() {
  latestScroll = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

function updateParallax() {
  const scroll = latestScroll;
  container.style.transform = `translate3d(0, ${scroll * 0.25}px, 0)`;
  ticking = false;
}

if (window.innerWidth > 400) {
  window.addEventListener("scroll", onScroll);
}

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
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress_bar");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const span = bar.querySelector("span");
          const percent = bar.dataset.percentage;

          span.style.width = percent + "%";
          span.style.background =
            "linear-gradient(90deg, rgb(188, 22, 91), rgb(123, 30, 58))";
          span.style.boxShadow = "0 0 15px rgba(123, 30, 58, 0.8)";

          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.6 }
  );

  bars.forEach((bar) => observer.observe(bar));
});

/* send post message */
(function () {
  emailjs.init("iymrFX53cs5dib4QY");
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_b3hoh2p", "template_r6zwxld", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message: " + error.text);
    });
});

/* carousel */
document.querySelectorAll(".carousel-wrapper").forEach((wrapper) => {
  const carousel = wrapper.querySelector(".carousel");
  const next = wrapper.querySelector(".next");
  const prev = wrapper.querySelector(".prev");

  const scrollAmount = () => carousel.clientWidth * 0.5;

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });
});

/* scale cert */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".achievement-icon img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

/* document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".achievement-icon img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
 */
