import React from 'react';



function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "12345") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }

export default function FrontPage() {
  return (

    

    <div>
      <container className="frontpage-container">
        <h1>FrontPage</h1>
        <p>Enter Password for Access</p>
        <p><input id="passwordBox" type="password"/></p>
        <a className="submit-btn" href="https://www.binisaya.com/cebuano/pantay" onclick="return checkPassword();">Submit</a>
      </container>
    </div>
  );
}