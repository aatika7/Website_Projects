function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const department = document.getElementById('department').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (name.length < 3) { 
      alert("Please enter a valid name with at least 3 characters.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    const phonePattern = /^\d{10,20}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }

    if (department === "") {
      alert("Please select a department.");
      return false;
    }

    const selectedDate = new Date(date);
    const currentDate = new Date();
    if (date === "" || selectedDate <= currentDate) {
      alert("Please select a valid appointment date in the future.");
      return false;
    }

    const selectedTime = new Date(`${date}T${time}`);
    if (time === "" || selectedTime <= currentDate) {
      alert("Please select a valid appointment time in the future.");
      return false;
    }

    alert("Appointment Booked Successfully!");
    return true;
  }

  document.querySelector('form').onsubmit = function(event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  };

  function handleSubmit() {
    alert("Form Submitted Successfully!");
    return true; // Return true to allow form submission
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.nav-link.active')?.classList.remove('active');
      this.classList.add('active');
    });
  });
  