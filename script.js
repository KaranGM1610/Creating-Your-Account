// -----------------------------
// Generate and Verify OTP
// -----------------------------
let generatedOTP = null;

document.addEventListener("DOMContentLoaded", function () {

    const verifyBtn = document.querySelector("#verifyBtn");
    const registerBtn = document.querySelector("#registerBtn");

    // Generate OTP when clicking "Verify"
    verifyBtn.addEventListener("click", function () {
        const email = document.querySelector("#email").value;

        if (email === "") {
            alert("Please enter your email first!");
            return;
        }

        generatedOTP = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

        alert("OTP Sent to email: " + generatedOTP + "\n(For testing purpose only)");

        const userOTP = prompt("Enter OTP you received:");

        if (userOTP == generatedOTP) {
            alert("Email Verified Successfully!");
            document.querySelector("#email").disabled = true;
            verifyBtn.innerText = "Verified";
            verifyBtn.classList.remove("btn-primary");
            verifyBtn.classList.add("btn-success");
            verifyBtn.disabled = true;
        } else {
            alert("Incorrect OTP! Please try again.");
        }
    });

    // -----------------------------
    // Final Form Validation
    // -----------------------------
    registerBtn.addEventListener("click", function (event) {
        event.preventDefault(); // stop unwanted page reload

        const fname = document.querySelector("#fname").value.trim();
        const lname = document.querySelector("#lname").value.trim();
        const pwd = document.querySelector("#pwd").value;
        const cpwd = document.querySelector("#cpwd").value;
        const mobile = document.querySelector("#mobile").value;
        const batch = document.querySelector("#batch").value;

        // Check required fields
        if (!fname || !lname || !pwd || !cpwd || !mobile || !batch) {
            alert("Please fill all the fields!");
            return;
        }

        // Password match
        if (pwd !== cpwd) {
            alert("Passwords do not match!");
            return;
        }

        // Mobile valid?
        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Enter a valid 10-digit mobile number!");
            return;
        }

        // Batch code check (example: A1, B12, C45 etc.)
        if (!/^[A-Za-z0-9]+$/.test(batch)) {
            alert("Invalid batch code!");
            return;
        }

        // Email verification check
        if (!verifyBtn.disabled) {
            alert("Please verify your email first!");
            return;
        }

        alert("Registration Successful!");
    });

});
