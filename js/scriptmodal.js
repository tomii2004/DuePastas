// Obtener los elementos
var modals = document.querySelectorAll(".modal");
var overlay = document.getElementById("overlay");
var btns = document.querySelectorAll(".portfolio-item, .social-link[data-modal]");
var spans = document.querySelectorAll(".close");

// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        overlay.style.display = "block";
        modal.focus(); // Establece el foco en el modal
    }
}

// Función para cerrar el modal
function closeModal() {
    modals.forEach(modal => modal.style.display = "none");
    overlay.style.display = "none";
}

// Asignar la función para abrir el modal a todos los enlaces
btns.forEach(btn => {
    btn.onclick = function (event) {
        event.preventDefault();
        var modalId = this.getAttribute("data-modal");
        openModal(modalId);
    };
});

// Cuando el usuario hace clic en <span> (x), se cierra el modal
spans.forEach(span => {
    span.onclick = function () {
        closeModal();
    };
});

// Cuando el usuario hace clic en el overlay, se cierra el modal
overlay.onclick = function () {
    closeModal();
};
