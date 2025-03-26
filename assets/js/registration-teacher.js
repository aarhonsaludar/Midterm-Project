document.getElementById('teacherRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    const txtFirstName = document.getElementById("txtFirstName").value
    const txtLastName = document.getElementById("txtLastName").value
    const txtEmail = document.getElementById("txtEmail").value
    const txtSubject = document.getElementById("txtSubject").value
    const txtPassword = document.getElementById("txtPassword").value
    const txtConfirmPassword = document.getElementById("txtConfirmPassword").value

    // Validate password confirmation
    if (txtPassword !== txtConfirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Validate email format
    if (!txtEmail.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }

    // Create user object
    const teacher = {
        firstName: txtFirstName,
        lastName: txtLastName,
        email: txtEmail,
        subject: txtSubject,
        password: txtPassword
    }

    // Store teacher object in local storage
    localStorage.setItem('teacher', JSON.stringify(teacher));

    alert('Registration successful!');

    // Clear the form with correct ID
    document.getElementById('teacherRegistrationForm').reset();
});
