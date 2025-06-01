
function login() {
  var user = document.getElementById('username').value;
  var pass = document.getElementById('password').value;
  if (user === "fiaxy_admin" && pass === "reseller2025") {
    localStorage.setItem("fiaxy_auth", "ok");
    window.location.href = "dashboard.html";
  } else {
    alert("Identifiants invalides");
  }
  return false;
}

function checkLogin() {
  if (localStorage.getItem("fiaxy_auth") !== "ok") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("fiaxy_auth");
  window.location.href = "login.html";
}
