function Submit() {
  let fieldIds = [
    "Name",
    "Age",
    "Password",
    "PasswordConfirm",
    "Email",
    "BirthDate",
  ];
  let Normal = true;
  let ITBA = document.getElementById("ITBA");
  let BE = document.getElementById("BE");
  let BDE = document.getElementById("BDE");
  let successValue = document.getElementById("inputRange").value;
  let text = "";

  if (ITBA.checked) {
    text = "ITBA";
  }
  if (BE.checked) {
    text = "BE";
  }
  if (BDE.checked) {
    text = "BDE";
  }
  if (!BDE.checked && !BE.checked && !ITBA.checked) {
    Normal = false;
    document.getElementById("hintRad").style.display = "block";
  } else {
    Normal = true;
    document.getElementById("hintRad").style.display = "none";
  }
  let FinalText = document.getElementById("finalText");
  let EmailPattern = /^[a-zA-Z0-9._-]+@gmail+\.com$/;

  let PasswordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{12,}$/;
  for (let fieldId of fieldIds) {
    let hintElement = document.getElementById("hint" + fieldId);
    if (hintElement) {
      hintElement.style.display = "none";
    }
  }
  let hintPassword = document.getElementById("hintPassword");
  let hintEmail = document.getElementById("hintEmail");

  for (let fieldId of fieldIds) {
    let element = document.getElementById(fieldId);
    let hintElement = document.getElementById("hint" + fieldId);
    if (element && hintElement && element.value === "") {
      Normal = false;
      hintElement.style.display = "block";
    }
  }

  let emailElement = document.getElementById("Email");
  if (!EmailPattern.test(emailElement.value)) {
    Normal = false;
    hintEmail.style.display = "block";
  }
  let passwordConfirmElement = document.getElementById("PasswordConfirm");
  let passwordElement = document.getElementById("Password");
  if (!PasswordPattern.test(passwordElement.value)) {
    Normal = false;
    hintPassword.style.display = "block";
  }

  if (passwordElement.value != passwordConfirmElement.value) {
    Normal = false;
    hintPassword.style.display = "block";
  }
  if (Normal == true) {
    let nameValue = document.getElementById("Name").value;
    let ageValue = document.getElementById("Age").value;
    let passwordValue = passwordElement.value;
    let emailValue = emailElement.value;
    let birthDateValue = document.getElementById("BirthDate").value;
    FinalText.textContent =
      "I am " +
      nameValue +
      ", I am " +
      ageValue +
      " years old" +
      ", Password is " +
      passwordValue +
      ", Email is " +
      emailValue +
      ", BDate is " +
      birthDateValue +
      ", Your program is:" +
      text +
      ", Your success is:" +
      successValue;
  }
}
