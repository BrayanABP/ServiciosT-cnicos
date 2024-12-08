// Seleccionar elementos
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const modals = document.querySelectorAll('.modal');
const sidebarBtn = document.getElementById('openSidebar');

// Función para abrir el modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    // Añadir la clase active a los modales
    modal.classList.add('active');
    // Ocultar el botón ☰
    sidebarBtn.style.display = 'none';
}

// Función para cerrar el modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    // Quitar la clase active de los modales
    modal.classList.remove('active');
    // Volver a mostrar el botón ☰
    sidebarBtn.style.display = 'block';
}

// Abrir la barra lateral
openSidebar.addEventListener("click", () => {
    sidebar.classList.add("active");
});

// Cerrar la barra lateral
closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

//almacenar el estado de mensaje enviado
function setMessageSent() {
  localStorage.setItem('messageSent', 'true');
}

// mostrar el mensaje si la página fue cargada después de enviar un mensaje
window.onload = function () {
  // Verificar si el mensaje fue enviado
  if (localStorage.getItem('messageSent') === 'true') {
    const mensaje = document.getElementById('mensaje-confirmacion');
    mensaje.innerHTML = '<span class="icono">✔️</span> Mensaje enviado exitosamente';
    mensaje.style.display = 'block';

    // Limpiar el almacenamiento local después de mostrar el mensaje
    localStorage.removeItem('messageSent');

    // Ocultar el mensaje automáticamente después de 3 segundos
    setTimeout(() => {
      mensaje.classList.add('fade-out');
      setTimeout(() => {
        mensaje.style.display = 'none';
      }, 500);
    }, 3000);
    
  }
};
// Gestionar el comportamiento de la superposición en dispositivos móviles
document.querySelectorAll('.image-container').forEach((container) => {
  const overlay = container.querySelector('.text-overlay');
  
  container.addEventListener('click', () => {
    if (window.innerWidth <= 768) { // Solo aplica para pantallas pequeñas
      // Quitar superposiciones activas
      document.querySelectorAll('.text-overlay.active').forEach((activeOverlay) => {
        if (activeOverlay !== overlay) {
          activeOverlay.classList.remove('active');
        }
      });
      
      // Alternar el estado activo de la superposición
      overlay.classList.toggle('active');
    }
  });
});

// Ocultar la superposición si se hace clic fuera de las imágenes
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    if (!e.target.closest('.image-container')) {
      document.querySelectorAll('.text-overlay.active').forEach((activeOverlay) => {
        activeOverlay.classList.remove('active');
      });
    }
  }
});


