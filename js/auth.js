// Register

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find(user => user.email === email);

        if (exists) {
            alert("Email already registered!");
            return;
        }

        users.push({
            name,
            email,
            password
        });

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}



// Login

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        let users =
            JSON.parse(localStorage.getItem("users")) || [];

        const user =
            users.find(
                user =>
                    user.email === email &&
                    user.password === password
            );

        if (user) {

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("Invalid Email or Password");

        }

    });

}