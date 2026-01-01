const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown-menu");
const volunteerButton = document.querySelector(".volunteer-arrow");
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouMessage');

menu.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

volunteerButton.addEventListener("click", function (event) {
  event.preventDefault(); // stops default behavior
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSfZEnVMVpixKCE6oYLZwvTb4ZL1MODNCjr7ik0jf7_bg8o5Nw/viewform",
    "_blank"
  );
});



form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual submission
  form.style.display = 'none'; // hide form
  thankYou.style.display = 'block'; // show thank-you message
});