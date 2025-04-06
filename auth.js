document.addEventListener("DOMContentLoaded", () => {
  const formTitle = document.getElementById("form-title");
  const emailField = document.getElementById("email");
  const toggleLink = document.getElementById("toggle-link");
  const toggleText = document.getElementById("toggle-text");
  const submitBtn = document.getElementById("submit-btn");

  let isLogin = true;

  function toggleForm() {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? "Login" : "Sign Up";
    emailField.classList.toggle("hide");
    submitBtn.textContent = isLogin ? "Login" : "Sign Up";
    toggleText.innerHTML = isLogin
      ? `Don't have an account? <span id="toggle-link">Sign Up</span>`
      : `Already have an account? <span id="toggle-link">Login</span>`;
    document
      .getElementById("toggle-link")
      .addEventListener("click", toggleForm);
  }

  toggleLink.addEventListener("click", toggleForm);

  document.getElementById("auth-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();

    if (username === "" || password === "") {
      alert("Please fill all fields.");
      return;
    }

    // Signup logic
    if (!isLogin) {
      if (email === "") {
        alert("Please enter your email.");
        return;
      }

      const existingUser = localStorage.getItem(username);
      if (existingUser) {
        alert("Username already exists. Please login or use another username.");
        return;
      }

      const userData = {
        username,
        email,
        password,
      };

      localStorage.setItem(username, JSON.stringify(userData));
      alert("Signed up successfully! You can now log in.");
      toggleForm(); // Switch to login
    }

    // Login logic
    else {
      const storedUser = localStorage.getItem(username);
      if (!storedUser) {
        alert("User not found. Please sign up first.");
        return;
      }

      const userData = JSON.parse(storedUser);
      if (userData.password !== password) {
        alert("Incorrect password!");
        return;
      }

      alert(`Logged in as ${username}`);
      window.location.href = "home.html"; // Redirect to dashboard
    }
  });
});
