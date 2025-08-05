document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("error-msg");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "welcome.html";
      } else {
        errorMsg.textContent = "Invalid username or password!";
      }
    });
    
  }
});

function logout() {
  alert("Logging out...");
  window.location.href = "index.html"; // redirect to login
}


 function saveSettings() {
      const notif1 = document.getElementById("notif1").checked;
      const notif2 = document.getElementById("notif2").checked;
      const notif3 = document.getElementById("notif3").checked;
      const dndTime = document.getElementById("dndTime").value;

      const settings = {
        notif1,
        notif2,
        notif3,
        dndTime
      };

      localStorage.setItem("notificationSettings", JSON.stringify(settings));

      document.getElementById("statusMsg").textContent = "✅ Preferences saved successfully!";
    }

    // Load saved settings
    document.addEventListener("DOMContentLoaded", () => {
      const saved = JSON.parse(localStorage.getItem("notificationSettings"));
      if (saved) {
        document.getElementById("notif1").checked = saved.notif1;
        document.getElementById("notif2").checked = saved.notif2;
        document.getElementById("notif3").checked = saved.notif3;
        document.getElementById("dndTime").value = saved.dndTime || "18:00";
      }
    });




