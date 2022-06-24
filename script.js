const pwd1 = document.getElementById("password1");
const pwd2 = document.getElementById("password2");
const errorMsg = document.querySelector(".error-message");

pwd2.addEventListener("input", function (e) {
  e.preventDefault();

  if (pwd1.value !== pwd2.value) {
    errorMsg.style.visibility = "visible";
  } else {
    errorMsg.style.visibility = "hidden";
  }
});
