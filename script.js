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
        showModal('Porfavor llenar todos los campos', true);
        return;
    }
    // Esto valida que el email sea valido
    if (!esEmailValido(email)) {
        showModal('Email invalido', true);
        return;
    }

    //Envia los datos del formulario al servidor
    console.log('Form submitted:', { nombre, email, asunto, mensaje });

    showModal(`Hola ${nombre} su mensaje fue enviado correctamente`, false);
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
            top: targetElement.offsetTop + -55,
            behavior: 'smooth'
        });
        toggleDrp();
    });
});

function showModal(texto, isWarning) {
    // trae el modal
    var modal = document.getElementById("myModal");
    // trae le boton de cerrar que esta en un <span>
    var span = document.getElementsByClassName("close")[0];
    const paragraphs = document.querySelectorAll('.modal-body p');
    if (isWarning) {
        document.querySelector('.modal-content').style.backgroundColor = '#f7bb05'; // Cambia el color del modal
    } else {
        document.querySelector('.modal-content').style.backgroundColor = '#4CAF50'; // Cambia el color del modal
    }
    paragraphs.forEach((p) => {
        p.textContent = texto;
    });
    modal.style.display = "block"; // presenta el modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // cuando hace click fuera del modal se cierra
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    //cierra el modal cuando pasan 4 segundos
    setTimeout(function () {
        modal.style.display = "none";
    }, 4000);

}



