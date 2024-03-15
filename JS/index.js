function checkEmail() {
    var emailInput = document.getElementById('emailInput');
    var resultMessage = document.getElementById('resultMessage');

    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailRegex.test(emailInput.value);

    if (isValidEmail) {
      resultMessage.style.color = '#72ff6b';
      resultMessage.innerHTML = 'Email is valid!';

      // If the email is valid, redirect to the main page
      window.location.href = 'main.html';
    } else {
      resultMessage.style.color = '#ff1b1b';
      resultMessage.style.fontFamily = 'Inter';
      resultMessage.innerHTML = 'Please enter a valid email address.';
    }
  }
