const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/participants/login', {
      method: 'POST',
      body: JSON.stringify({ Email:email, userPass:password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const fname = document.querySelector('#fname-signup').value.trim();
  const lname = document.querySelector('#lname-signup').value.trim();
  const address = document.querySelector('#address-signup').value.trim();
  const phone = document.querySelector('#phone-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const status = "active";

  if (fname && email && password) {
    console.log('working');
    const response = await fetch('/api/participants', {
      method: 'POST',
      body: JSON.stringify({ firstName:fname, lastName:lname, Address:address, phoneNum:phone, Email:email, userPass:password, userStatus:status }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
