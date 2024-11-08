const hardCodedName = "pri"
const hardCodedPass = "pri"


const user = document.getElementById("username");
const pass = document.getElementById("password");
const submit = document.getElementById
    ("submitBtn");




submit.addEventListener("click", function (event) {
    event.preventDefault();
    let enteredUser = user.value;
    let enteredPass = pass.value;
    console.log(enteredUser);
    console.log(enteredPass);
    if (enteredUser === hardCodedName && enteredPass === hardCodedPass) {
        window.location.href = "dashboard.html";

    }
    else {
        alert("Incorrect Login Credentials, Please Try Again")
    }
})




