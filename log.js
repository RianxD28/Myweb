document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Get existing data from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Save new login data
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Login data saved!");
  });
