function showMessage() {
		alert("Thank you for registering. We will get back to you shortly.")
  }



var submitted=false;

function validateName() {
      var name = document.getElementById('firstname').value;
      if(name.length == 0) {
            alert("Name can't be blank");
            return false;
         }
      if(!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
            alert("Please enter your correct name");//Validation Message
            return false;
            }
          return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
      if(phone.length == 0) {
        alert("Phone number can't be blank") ;//Validation Message
        return false;
      }

      if(!phone.match(/^[0]?[789]\d{9}$/)) {
         alert("Please enter a correct phone number") ;//Validation Message
         return false;
      }

         return true;

}

function validateEmail() {

  var email = document.getElementById('email').value;
  if(email.length == 0) {
     alert("Email can't be blank") ;//Validation Message
            return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
     alert("Please enter a correct email address") ;//Validation Message
    return false;
     }
    return true;
}


function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail()) {

    alert("Form not submitted");//Validation Message
      return false;
          }
      else {
            submitted=true;
            return true;
          }
}

function validateCName() {
  var name = document.getElementById('cname').value;
  if(name.length == 0) {
        alert("Name can't be blank");
        return false;
     }
  if(!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct name");//Validation Message
        return false;
        }
      return true;
}

function validateCEmail() {

  var email = document.getElementById('cemail').value;
  if(email.length == 0) {
     alert("Email can't be blank") ;//Validation Message
            return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
     alert("Please enter a correct email address") ;//Validation Message
    return false;
     }
    return true;
}

function validateContFrm() {
  if (!validateCName() || !validateCEmail()) {

    alert("Form not submitted");//Validation Message
      return false;
          }
      else {
            submitted=true;
            return true;
          }
}