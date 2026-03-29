// ================= REGISTER =================

let Username = document.querySelector(".username");
let Email = document.querySelector(".email");
let Password = document.querySelector(".password");
let submit = document.querySelector(".Register");

// lowercase email
Email.addEventListener("input", (e) => {
  e.target.value = e.target.value.toLowerCase();
});

submit.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!Username.value || !Email.value || !Password.value) {
    Swal.fire({
      icon: "warning",
      title: "Missing fields",
      text: "Please fill all fields"
    });
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: Username.value,
        email: Email.value,
        password: Password.value
      })
    });

    const data = await res.json();

    // ❌ error
    if (!res.ok) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: data.message
      });
      return;
    }

    // ✅ success
    Swal.fire({
      icon: "success",
      title: "Registered",
      text: "User registered successfully"
    }).then(() => {
      window.location.reload();
    });

  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Server Error",
      text: "Something went wrong"
    });
  }
});


// ================= LOGIN =================

let log_Email = document.querySelector(".log_email");
let log_Password = document.querySelector(".log_password");
let log_submit = document.querySelector(".log_Register");

// lowercase email
log_Email.addEventListener("input", (e) => {
  e.target.value = e.target.value.toLowerCase();
});

log_submit.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!log_Email.value || !log_Password.value) {
    Swal.fire({
      icon: "warning",
      title: "Missing fields",
      text: "Please enter email and password"
    });
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: log_Email.value,
        password: log_Password.value
      })
    });

    const data = await res.json();

    // ❌ error → show only errors
    if (!res.ok) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: data.message
      });
      return;
    }

    localStorage.removeItem("token");
    localStorage.setItem("token", data.token);

    // redirect to dashboard
    window.location.href = `http://localhost:5173/?token=${data.token}`;

  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Server Error",
      text: "Something went wrong"
    });
  }
});