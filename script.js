
function acceptAge() {
  localStorage.setItem("ageVerified", "true");
  document.getElementById("ageModal").style.display = "none";
}

function denyAge() {
  document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:20%'>Доступ запрещён</h1>";
}

function register() {
  const name = document.getElementById("username").value;
  if (name.trim()) {
    localStorage.setItem("user", name);
    updateUserUI();
  }
}

function logout() {
  localStorage.removeItem("user");
  updateUserUI();
}

function updateUserUI() {
  const name = localStorage.getItem("user");
  if (name) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("welcomeBox").style.display = "block";
    document.getElementById("userDisplay").textContent = name;
  } else {
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("welcomeBox").style.display = "none";
  }
}

window.onload = function() {
  updateUserUI();
  if (localStorage.getItem("ageVerified") !== "true") {
    document.getElementById("ageModal").style.display = "flex";
  } else {
    document.getElementById("ageModal").style.display = "none";
  }
}
