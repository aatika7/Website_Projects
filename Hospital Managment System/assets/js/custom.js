// Function to validate the appointment form
const validateForm = () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const department = document.getElementById('department').value;
  const date = document.getElementById('appointment-date').value;
  const time = document.getElementById('appointment-time').value;

  // Validate name
  if (name.length < 3) { 
      alert("Please enter a valid name with at least 3 characters.");
      return false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  // Validate phone number
  const phonePattern = /^\d{10,20}$/;
  if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
  }

  // Validate department selection
  if (department === "") {
      alert("Please select a department.");
      return false;
  }

  // Validate appointment date
  const selectedDate = new Date(date);
  const currentDate = new Date();
  if (date === "" || selectedDate <= currentDate) {
      alert("Please select a valid appointment date in the future.");
      return false;
  }

  // Validate appointment time
  const selectedTime = new Date(`${date}T${time}`);
  if (time === "" || selectedTime <= currentDate) {
      alert("Please select a valid appointment time in the future.");
      return false;
  }

  alert("Appointment Booked Successfully!");
  return true;
};

// Handle form submission
document.getElementById('appointment-form').onsubmit = function(event) {
  event.preventDefault();  // Prevent default form submission

  if (validateForm()) {
      alert("Form Submitted Successfully!");
      // You can send the form data to the server here
      // Example: 
      // fetch('/submit', { method: 'POST', body: new FormData(this) });
  }
};

// Highlight active navigation link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
      document.querySelector('.nav-link.active')?.classList.remove('active');
      this.classList.add('active');
  });
});
