const signupFunction = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}
const loginFunction = async (event) => {
    event.preventDefault();

    // Login values
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // POST API request 
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Successful login sends to profile handlebar
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFunction);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFunction);