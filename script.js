function esEmailValido(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //codigo regex para comparar el email
    return regex.test(email);
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Esto valida que los campos del formulario no esten vacios
    if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
        alert('Porfavor llenar todos los campos.');
        return;
    }
    // Esto valida que el email sea valido
    if (!esEmailValido(email)) {
        alert('Email invalido');
        return;
    }

    //Envia los datos del formulario al servidor
    console.log('Form submitted:', { nombre, email, asunto, mensaje });
    alert(`Hola ${nombre} su mensaje fue enviado correctamente`);
});

const dropdown = document.querySelector('.dropdown_menu'); //trae el dropdown segun su clase de css
const btnIcon = document.getElementById('btnToggle');
//funcion para abrir el dropdown
function toggleDrp() {
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open'); //comprueba que el dropdown este abierto
    btnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'; //cambia el icono de barras a equis
}

//agrega scroll a todos los <a> que tengan la clase scroll
document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href'); // trae el atributo del href
        const targetElement = document.querySelector(targetId);// trae el elemento que hace referencia el atributo

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        toggleDrp();
    });
});