function Submit() {
  let fields = {
    Name: document.getElementById("Name").value,
    Age: document.getElementById("Age").value,
    Password: document.getElementById("Password").value,
    PasswordConfirm: document.getElementById("PasswordConfirm").value,
    Email: document.getElementById("Email").value,
    BirthDate: document.getElementById("BirthDate").value,
  };

  let ITBA = document.getElementById("ITBA");
  let BE = document.getElementById("BE");
  let BDE = document.getElementById("BDE");
  let successValue = document.getElementById("inputRange").value;
  //console.log(document.getElementById(''))
  let text = "";

  if (ITBA.checked == true) {
    text = "ITBA";
  }
  if (BE.checked == true) {
    text = "BE";
  }
  if (BDE.checked == true) {
    text = "BDE";
  }

  let FinalText = document.getElementById("finalText");
  let EmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/;
  let PasswordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{12,}$/;
  let Normal = true;
  for (let id in fields) {
    if (fields[id] == "") {
      Normal = false;
      alert("Error is in " + id + ", it is empty");
    }
  }

  if (!EmailPattern.test(fields["Email"])) {
    Normal = false;
    alert("Error is in " + fields["Email"] + ", it is written in a wrong way");
  }

  if (!PasswordPattern.test(fields["Password"])) {
    Normal = false;
    alert(
      "Error is in " + fields["Password"] + ", it is written in a wrong way"
    );
  }
  if (fields["Password"] != fields["PasswordConfirm"]) {
    Normal = false;
    alert(
      "Error is in " + fields["Password"] + ", it is not like Password confirm"
    );
  }

  if (Normal == true) {
    FinalText.textContent =
      "I am " +
      fields["Name"] +
      ", I am " +
      fields["Age"] +
      " years old" +
      ", Password is " +
      fields["Password"] +
      ", Email is " +
      fields["Email"] +
      ", BDate is " +
      fields["BirthDate"] +
      ", Your program is:" +
      text +
      ", Your success is:" +
      successValue;
  }
}
