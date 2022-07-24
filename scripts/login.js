let form = document.querySelector("form");

let userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let data = {
    email: form.email.value,
    password: form.password.value,
  };
  checkEmails(data);
});

function checkEmails(data) {
  let filtered = userData.filter(function (element) {
    return data.email === element.email && data.password === element.password;
  });

  if (filtered.length == 0) {
    alert("Please fill correct details");
  } else {
    alert("Logged IN");
    localStorage.setItem("TripVillas_Login", true);
    window.location.href = "./index.html";
    return true;
  }
}
