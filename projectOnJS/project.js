function toggleForms() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    
    if (registerForm.style.display === 'none') {
      registerForm.style.display = 'block';
      loginForm.style.display = 'none';
    } else {
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    }
  }
  
  function register() {
    const fullname = document.getElementById('register-fullname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
  
    if (fullname && email && password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.email === email);
      
      if (userExists) {
        alert('User already registered');
      } else {
        users.push({ fullname, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        toggleForms();
      }
    } else {
      alert('Please fill in all fields');
    }
  }
  
  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      alert(`Welcome, ${user.fullname}!`);
    } else {
      alert('Invalid credentials');
    }
  }
  
