// JavaScript for Form Validation 


  // Select the form element
  const form = document.getElementById("bookingForm");

  // Function to validate the email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email regex
    return emailRegex.test(email);
  }

  // Function to validate the phone number format (optional)
  function isValidPhone(phone) {
    const phoneRegex = /^\+?[0-9\s\-]{7,15}$/; // Allows +, spaces, and dashes
    return phoneRegex.test(phone);
  }

  // Add event listener to the form on submit
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now
    let isFormValid = true;

    // Get form field values
    const nameField = document.getElementById("passengerName");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const flightField = document.getElementById("flightNumber");
    const dateField = document.getElementById("departureDate");
    const classField = document.getElementById("flightClass");

    // Clear previous validation classes
    const fields = [nameField, emailField, phoneField, flightField, dateField, classField];
    fields.forEach((field) => field.classList.remove("is-invalid", "is-valid"));

    // Validate Passenger Name
    if (nameField.value.trim() === "") {
      nameField.classList.add("is-invalid");
      isFormValid = false;
    } else {
      nameField.classList.add("is-valid");
    }

    // Validate Email
    if (!isValidEmail(emailField.value)) {
      emailField.classList.add("is-invalid");
      isFormValid = false;
    } else {
      emailField.classList.add("is-valid");
    }

    // Validate Phone Number
    if (!isValidPhone(phoneField.value)) {
      phoneField.classList.add("is-invalid");
      isFormValid = false;
    } else {
      phoneField.classList.add("is-valid");
    }

    // Validate Flight Number
    if (flightField.value.trim() === "") {
      flightField.classList.add("is-invalid");
      isFormValid = false;
    } else {
      flightField.classList.add("is-valid");
    }

    // Validate Departure Date
    if (!dateField.value) {
      dateField.classList.add("is-invalid");
      isFormValid = false;
    } else {
      dateField.classList.add("is-valid");
    }

    // Validate Class Selection
    if (classField.value === "") {
      classField.classList.add("is-invalid");
      isFormValid = false;
    } else {
      classField.classList.add("is-valid");
    }

    // If all validations pass
    if (isFormValid) {
      alert("Form submitted successfully!");
      form.reset(); // Reset form after submission
      fields.forEach((field) => field.classList.remove("is-invalid", "is-valid")); // Clear validation feedback
    }
  });
