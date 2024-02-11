const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function validateEmail() {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const email = emailInput.value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.length < 3 || !emailPattern) {
    errorMessage.textContent = 'Please add valid email address';
    emailInput.classList.add('error');
  } else {
    errorMessage.textContent = '';
  }
}

function validatePassword() {
  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  const password = passwordInput.value;

  const hasNumericValue = /\d/.test(password);

  if (password.length <= 8) {
    passwordError.textContent = 'Password must be at least 8 characters';
    passwordInput.classList.add('error');
  } else if (!hasNumericValue && password.length >= 8) {
    passwordError.textContent = 'Password must have a numeric value';
    passwordInput.classList.add('error');
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('error');
  }
}

//populate the current date on initial load
function populateDate() {
  const dateInput = document.getElementById('date');
  const todaysDate = new Date().getDate();
  dateInput.value = todaysDate;

  const monthInput = document.getElementById('month');
  const currentMonth = new Date().getMonth();
  monthInput.value = currentMonth + 1;

  const yearInput = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearInput.value = currentYear;
}

//to fill the months dropdown
function populateMonths() {
  const monthSelect = document.getElementById('month');

  months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.text = month;
    monthSelect.add(option);
  });
}

//to fill the years dropdown
function populateYears() {
  const yearSelect = document.getElementById('year');
  const currentYear = new Date().getFullYear();

  for (let year = currentYear - 20; year <= currentYear + 10; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.add(option);
  }
}

function submitForm() {
  validateEmail();
  validatePassword();

  const date = document.getElementById('date').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;

  console.log(`${date}-${month}-${year}`);
}

// Add event listeners
document.querySelector('.submit-btn').addEventListener('click', submitForm);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);

// Populate initial data
populateMonths();
populateYears();
populateDate();
