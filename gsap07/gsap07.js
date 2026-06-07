let cards = document.querySelectorAll(".card");

cards.forEach(card => {
  let overlay = card.querySelector("::before"); // pseudo pe directly nahi hota, so better div use kar

  card.addEventListener("mouseenter", () => {
    gsap.to(card.querySelector(".overlay"), {
      width: "100%",
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(card.querySelector("h3"), {
      color: "#000"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card.querySelector(".overlay"), {
      width: "0%",
      duration: 0.5,
      ease: "power2.in"
    });

    gsap.to(card.querySelector("h3"), {
      color: "#dedede"
    });
  });
});