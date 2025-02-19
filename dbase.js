function loadUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let tableBody = document.getElementById("userData");

  tableBody.innerHTML = ""; // Clear previous entries

  users.forEach((user, index) => {
    let row = `<tr>
            <td>${user.email}</td>
            <td>${user.password}</td>
        </tr>`;
    tableBody.innerHTML += row;
  });
}

function clearData() {
  localStorage.removeItem("users");
  alert("All data cleared!");
  loadUsers(); // Reload table
}

loadUsers(); // Load users on page load
