document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fname = document.getElementById("firstname").value;
      const lname = document.getElementById("lastname").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const cpassword = document.getElementById("Cpassword").value;

      if (password !== cpassword) {
        alert("Passwords do not match");
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const uid = user.uid;

          firebase.firestore().collection("users").doc(uid).set({
            firstname: fname,
            lastname: lname,
            email: email,
            role: "student"
          })
          .then(() => {
            alert("Signup successful!");
            window.location.href = "login.html";
          })
          .catch((error) => {
            alert("Firestore error: " + error.message);
          });
        })
        .catch((error) => {
          alert("Signup error: " + error.message);
        });
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert("Login successful!");
          window.location.href = "dashboard.html";
        })
        .catch((error) => {
          alert("Login failed: " + error.message);
        });
    });
  }
});









