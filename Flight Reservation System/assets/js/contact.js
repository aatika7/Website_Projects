document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Add Bootstrap's validation styles
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
      } else {
        alert('Thank you for reaching out! Your message has been sent.');
        form.reset();
        form.classList.remove('was-validated');
      }
    });
  });