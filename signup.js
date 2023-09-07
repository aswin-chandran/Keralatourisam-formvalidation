function validate() {
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd");
  var msg = document.getElementById("msg");
  var pmsg = document.getElementById("pmsg");
  var phone = document.getElementById("phoneno").value;
  var pnmsg = document.getElementById("pnmsg");
  var strng= document.getElementById("str");

  var regexp =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var pregexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  var phoneregexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (phone == "") {
    alert("Enter Phone No ");
  } else if (!phoneregexp.test(phone)) {
    pnmsg.innerHTML = "Phone number is invalid !";
    pnmsg.style.color = "red";
  } else if (uname == "") {
    alert("Enter Email id");
    pnmsg.innerHTML = "";
  } else if (!regexp.test(uname)) {
    msg.innerHTML = "Email is invalid !";
    msg.style.color = "red";
  } else if (pwd == "") {
    alert("Enter the Password");
    msg.innerHTML = "";
  } else if (!pregexp.test(pwd.value)) {
    pmsg.innerHTML =
      " Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
    pmsg.style.color = "red";
    pwd.style.border="1px solid red";
    pmsg.style.color = "red";
    strng.innerHTML =
    " Poor Password";
    strng.style.color = "red"
    

  } 
  else {
    pmsg.innerHTML = "Account Created Successfully ";
    pwd.style.border="1px solid green";

    pmsg.style.color = "green";
    strng.innerHTML =
    " Storng Password";
    strng.style.color = "green"
    
  }
}

