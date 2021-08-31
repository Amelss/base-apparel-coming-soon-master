const enterBtn = document.getElementById("enter-btn");
const error = document.getElementById("error");
const email = document.getElementById("email");
const message = document.querySelector(".message");

// Enter button

enterBtn.addEventListener("click", function () {
  if (email.validity.typeMismatch) {
    error.style.visibility = "visible";
    email.style.borderColor = "red";
    message.style.color = "red";
    message.textContent = "Please enter a valid email address";
  } else {
    email.value = "";
    error.style.visibility = "hidden";
    email.style.borderColor = "hsla(0, 36%, 70%, 40%)";
    message.style.color = "hsla(0, 36%, 70% ,80%)";
    message.textContent = "Thank you for your email address";
  }
});

// When user clicks back into the email input box
email.addEventListener("click", function () {
  message.textContent = "";
});
