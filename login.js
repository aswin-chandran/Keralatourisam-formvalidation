function validate() {
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;
  var msg = document.getElementById("msg");
  var pmsg = document.getElementById("pmsg");

  var regexp =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var pregexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  
  if (uname == "") {
    alert("Enter Email id");
  } else if (!regexp.test(uname)) {
    msg.innerHTML = "Email is invalid !";
    msg.style.color = "red";
  } else if (pwd == "") {
    alert("Enter the Password");
    msg.innerHTML = "";
  } else if (!pregexp.test(pwd)) {
    pmsg.innerHTML =
      " Incorrect Password";
    pmsg.style.color = "red";
  } else {
    pmsg.innerHTML = "You have successfully logged in";

    pmsg.style.color = "green";
    return true;
  }
}
