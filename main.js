// Function to show/hide password
const showHidePassword = () => {
   const passwordInput = document.getElementById('login-pass');
   const eyeIcon = document.getElementById('login-eye');

   eyeIcon.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
         passwordInput.type = 'text';
         eyeIcon.classList.remove('ri-eye-off-line');
         eyeIcon.classList.add('ri-eye-line');
      } else {
         passwordInput.type = 'password';
         eyeIcon.classList.remove('ri-eye-line');
         eyeIcon.classList.add('ri-eye-off-line');
      }
   });
};

// Function to handle form submission
const handleFormSubmit = (event) => {
   event.preventDefault();

   // Check credentials (replace with your actual credentials check)
   const username = "rabbitpuchu@gmail.com";
   const password = "shambhavi";

   const emailInput = document.getElementById('login-email');
   const passwordInput = document.getElementById('login-pass');
   const errorText = document.getElementById('login-error');

   if (emailInput.value === username && passwordInput.value === password) {
      // Successful login - Redirect to another page
      window.location.href = "another-page.html"; // Replace with your page URL
   } else {
      // Display error message
      errorText.textContent = "Incorrect username or password.";
   }
};

// Event listener for form submission
const form = document.getElementById('login-form');
form.addEventListener('submit', handleFormSubmit);

// Initialize show/hide password functionality
showHidePassword();
