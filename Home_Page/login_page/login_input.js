// input sign in ################## 

let Username  = document.querySelector(".username");
let Email  = document.querySelector(".email");
let Password  = document.querySelector(".password");
let submit = document.querySelector(".Register");

let Data ;
let DataList = [];

Email.addEventListener("input", (e) => {
  e.target.value = e.target.value.toLowerCase();
});


submit.addEventListener("click", (e) => {
    e.preventDefault();

    const Data = {
        username: Username.value,
        email: Email.value,
        password: Password.value
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


// ########################################################
                  // login verification //


let log_Email  = document.querySelector(".log_email");
let log_Password  = document.querySelector(".log_password");
let log_submit = document.querySelector(".log_Register");    

log_Email.addEventListener("input", (e) => {
  e.target.value = e.target.value.toLowerCase();
});


log_submit.addEventListener("click", (e)=>{
  e.preventDefault();

  if (log_Email.value && log_Password.value != 0 ){
     
    const log_Data = {
      email: log_Email.value,
      password: log_Password.value 

  };
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(log_Data)
  })
  .then(res => res.text())
  .then(msg => {
      // Determine SweetAlert icon
  let icon = 'success';            // default
  if (msg.startsWith("❌")) icon = 'error';
  else if (msg.startsWith("⚠️")) icon = 'warning';

  Swal.fire({
    icon: icon,
    title: icon === 'error' ? 'Oops...' : 'Success',
    text: msg,
    confirmButtonText: 'OK'
  }).then(() => {
      // Only reload if success
      if (msg.includes("✅")) {
        window.location.reload(); // reloads the page
      }
    });
  });
}
})