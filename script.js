// Inicialización de la página
function inicializarPagina() {
    console.log("Portafolio de David Jiménez cargado correctamente");
}

// Animaciones suaves
function agregarAnimaciones() {
    const secciones = document.querySelectorAll('section');
    
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    secciones.forEach(seccion => {
        seccion.style.opacity = '0';
        seccion.style.transform = 'translateY(20px)';
        seccion.style.transition = 'all 0.5s ease-in-out';
        observador.observe(seccion);
    });
}

// Efectos hover en proyectos
function agregarEfectosProyectos() {
    const proyectos = document.querySelectorAll('.project-card');
    
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseenter', () => {
            proyecto.style.transform = 'translateY(-10px)';
        });
        
        proyecto.addEventListener('mouseleave', () => {
            proyecto.style.transform = 'translateY(0)';
        });
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    inicializarPagina();
    agregarAnimaciones();
    agregarEfectosProyectos();
    activarMenuMovil();
});

// Funcionalidad del menú móvil
function activarMenuMovil() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.setAttribute('aria-label', 'Abrir menú');
    toggle.innerHTML = '☰';
    nav.insertBefore(toggle, nav.firstChild);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

    // cerrar menú al clicar un enlace (útil en móvil)
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            nav.classList.remove('nav-open');
        });
    });
}