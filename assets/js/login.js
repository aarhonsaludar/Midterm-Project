const defaultAdmin = {
    emailAdmin: 'admin@school.com',
    passwordAdmin: 'admin123'
};

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const submitButton = loginForm.querySelector('button[type="submit"]');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        const txtEmail = document.getElementById('txtEmail').value;
        const txtPassword = document.getElementById('txtPassword').value;

        if (txtEmail === defaultAdmin.emailAdmin && txtPassword === defaultAdmin.passwordAdmin) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            window.location.href = 'dashboard-admin.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});

function checkAdminSession() {
    if (!sessionStorage.getItem('adminLoggedIn')) {
        window.location.href = 'admin-login.html';
    }
}




