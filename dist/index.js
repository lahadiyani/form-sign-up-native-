const nama = document.getElementById("text");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const signUp = document.getElementById("button-signup");

signUp.addEventListener("click", function() {
    const nameValue = nama.value;
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    const jsonData = {
        name: nameValue,
        username: usernameValue,
        email: emailValue,
        password: passwordValue
    };
   console.log(jsonData);
});

function passVisibility() {
  const eyePass = document.getElementById("eye");
  const password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
    eyePass.innerHTML = `<ion-icon name="eye-outline" id="eye" class="eye"></ion-icon>`;
  } else {
    password.type = "password";
    eyePass.innerHTML = `<ion-icon name="eye-off-outline" id="eye" class="eye"></ion-icon>`;
  }
}