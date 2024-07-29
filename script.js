const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Send form data to server or email
    // You can add your own logic here to handle form submission
    console.log('Form submitted:', { name, email, message });
});