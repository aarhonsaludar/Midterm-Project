document.getElementById('studentRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const txtFirstName = document.getElementById("txtFirstName").value;
    const txtLastName = document.getElementById("txtLastName").value;
    const txtStudentNumber = document.getElementById("txtStudentNumber").value.toString();
    const txtSection = document.getElementById("txtSection").value;
    const txtStudentPassword = document.getElementById("txtStudentPassword").value;
    const txtStudentConfirmPassword = document.getElementById("txtStudentConfirmPassword").value;

    if (txtStudentPassword !== txtStudentConfirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (txtStudentNumber.length !== 8) {
        alert('Student number must be 8 digits!');
        return;
    }

    const student = {
        firstName: txtFirstName,
        lastName: txtLastName,
        studentNumber: txtStudentNumber,
        section: txtSection,
        studentPassword: txtStudentPassword
    }

    const students = JSON.parse(localStorage.getItem('students') || '[]');
    
    if (students.some(s => s.studentNumber === txtStudentNumber)) {
        alert('Student number already registered!');
        return;
    }
    
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    alert('Registration successful!');
    
    document.getElementById('studentRegistrationForm').reset();
    
    window.location.href = 'student-login.html';
});