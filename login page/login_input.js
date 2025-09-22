// input sign in  

const Username  = document.querySelector(".username");
const Email  = document.querySelector(".email");
const Password  = document.querySelector(".password");
const submit = document.querySelector(".Register");

let Data ;
let DataList = [];

submit.addEventListener("click",() => {
    // e.preventDefault();
    if ( Username.value != "" && Email.value != "" && Password.value != ""  ) {
            console.log(" Submit ");
            Data = {
                username : Username.value,
                email : Email.value,
                password : Password.value
            }
            DataList.push(Data);
            console.log(DataList);

    }



})

