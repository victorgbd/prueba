const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Esto valida que los campos del formulario no esten vacios
    if (name === '' || email === '' || message === '') {
        alert('Porfavor llenar todos los campos.');
        return;
    }

    //Envia los datos del formulario al servidor
    console.log('Form submitted:', { name, email, message });
});