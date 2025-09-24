// input sign in  

let Username  = document.querySelector(".username");
let Email  = document.querySelector(".email");
let Password  = document.querySelector(".password");
let submit = document.querySelector(".Register");

let Data ;
let DataList = [];



submit.addEventListener("click", (e) => {
    e.preventDefault();

    const Data = {
        username: document.querySelector(".username").value,
        email: document.querySelector(".email").value,
        password: document.querySelector(".password").value
    };

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Data)
    })
    .then(res => res.text())
    .then(msg => {
      Swal.fire({
    icon: msg.includes("❌") ? 'error' : 'success',
    title: msg.includes("❌") ? 'Oops...' : 'Success',
    text: msg,
    confirmButtonText: 'OK'
  }).then(() => {
    // Only reload if success
    if (msg.includes("✅")) {
      window.location.reload(); // reloads the page
    }
  });
})
})