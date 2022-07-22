let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit", function(event){
    event.preventDefault();

    let data = {
        name: form.firstname.value,
        email: form.email.value,
        password: form.password.value,
    };

    if(checkEmails(data.email) === true){
        userData.push(data);
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Account Creating Successful")
        window.location.href="signIn_login.html"

    } else {
        alert("Account Already Exist")
    }
});

function checkEmails(email){
    let filtered = userData.filter(function(element){
        return email === element.email;

    });

    if(filtered.length > 0){
        return false;
    }else {
        window.location.href="index.html"
        return true;
    }
}