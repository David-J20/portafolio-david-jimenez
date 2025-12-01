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

/* Lightbox: abrir imagen en modal y opción de abrir en nueva pestaña */
function initLightbox() {
    const overlay = document.getElementById('lb-overlay');
    const imgEl = document.getElementById('lb-img');
    const caption = document.getElementById('lb-caption');
    const closeBtn = document.getElementById('lb-close');
    const newTab = document.getElementById('lb-newtab');

    if (!overlay) return;

    function openLightbox(src, alt) {
        imgEl.src = src;
        imgEl.alt = alt || '';
        caption.textContent = alt || '';
        newTab.href = src;
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        imgEl.src = '';
        caption.textContent = '';
    }

    // abrir al hacer click en miniaturas
    document.querySelectorAll('.gallery-item img, .project-content img').forEach(img => {
        img.addEventListener('click', (e) => {
            openLightbox(img.src, img.alt);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // initLightbox se inicializa después de la carga del DOM
    initLightbox();
});