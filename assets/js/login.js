function handleTeacherLogin(event) {
    event.preventDefault();

    const txtEmail = document.getElementById('txtEmail').value;
    const txtPassword = document.getElementById('txtPassword').value;

    const storedTeacher = JSON.parse(localStorage.getItem('teacher'));

    if (!storedTeacher) {
        alert('No registered account found!');
        return;
    }

    if (txtEmail === storedTeacher.email && txtPassword === storedTeacher.password) {
        alert('Login successful!');
        window.location.href = '../pages/dashboard-teacher.html';
    } else {
        alert('Invalid email or password!');
    }
}

function handleStudentLogin(event) {
    event.preventDefault();

    const txtStudentNumber = document.getElementById('txtStudentNumber').value.toString();
    const txtStudentPassword = document.getElementById('txtStudentPassword').value;

    const students = JSON.parse(localStorage.getItem('students') || '[]');
    console.log('Stored students:', students);
    console.log('Attempting login with student number:', txtStudentNumber);
    
    const student = students.find(s => s.studentNumber.toString() === txtStudentNumber);

    if (!student) {
        alert('No registered account found!');
        return;
    }

    if (txtStudentPassword === student.studentPassword) {
        localStorage.setItem('currentStudent', student.studentNumber);
        alert('Login successful!');
        window.location.href = '../pages/dashboard-student.html';
    } else {
        alert('Invalid student number or password!');
    }
}

