const faders_elements = document.querySelectorAll('.fade-in-ani');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('appear-ani');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders_elements.forEach(fader => appearOnScroll.observe(fader))