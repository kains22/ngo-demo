const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown-menu");
const backToTop = document.querySelector('.back-to-top');
const volunteerButton = document.querySelector(".volunteer-arrow");
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouMessage');
const donationForm = document.getElementById('donationForm');
const donationThankYou = document.getElementById('donationThankYou');
const donateImage = document.querySelector('.donate-image');


if (menu && dropdown) {
  menu.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
}

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
}

if (volunteerButton) {
  volunteerButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfZEnVMVpixKCE6oYLZwvTb4ZL1MODNCjr7ik0jf7_bg8o5Nw/viewform",
      "_blank"
    );
  });
}

if (form && thankYou) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    thankYou.style.display = 'block';
  });
}

if (donationForm && donationThankYou) {
  donationForm.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent actual submission

    // hide the form
    donationForm.style.display = 'none';

    // hide the image
    if (donateImage) donateImage.style.display = 'none';

    // show thank-you message
    donationThankYou.style.display = 'block';
  });

}
