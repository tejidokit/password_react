import React from "react";


function checkPassword() {
  const password = document.getElementById("passwordBox");
  const passwordText = password.value;
  if (passwordText === "1") {
    window.location.href = "https://google.com";
  } else {
    alert("Access denied! Incorrect password!");
  }
}

export default function FrontPage() {
  return (
    <>
      <container className="frontpage-container">
        <h1>Welcome</h1>
        <p>Enter Password for Access</p>
        <p>
          <input className="password-input" id="passwordBox" type="password" />
        </p>
        <button className="submit-btn" onClick={checkPassword}>
          Submit
        </button>
      </container>
    </>
  );
}
