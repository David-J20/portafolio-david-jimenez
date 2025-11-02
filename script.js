// Sistema de puntos y logros
let puntosTotales = 0;
let logrosDesbloqueados = 0;

// Array de habilidades para demostrar bucles
const misHabilidades = [
    "Python", "Java", "JavaScript", "Clojure",
    "HTML", "CSS", "Node.js", "Tailwind",
    "Cypress", "Postman", "Fulcro"
];

// Función que se ejecuta al cargar la página
function inicializarPagina() {
    alert("¡Bienvenido a mi portafolio interactivo!");
    mostrarPuntos();
    agregarInteractividadHabilidades();
}

// Función para mostrar puntos (usando operadores)
function mostrarPuntos() {
    const header = document.querySelector('header');
    const puntuacion = document.createElement('div');
    puntuacion.id = 'puntuacion';
    puntuacion.innerHTML = `Puntos: ${puntosTotales} | Logros: ${logrosDesbloqueados}`;
    header.appendChild(puntuacion);
}

// Función que usa while para animar texto
function animarTexto(elemento) {
    let texto = elemento.textContent;
    let i = 0;
    elemento.textContent = '';
    
    while (i < texto.length) {
        setTimeout(() => {
            elemento.textContent += texto[i];
        }, 100 * i);
        i++;
    }
}

// Función que usa for para mostrar habilidades
function mostrarHabilidadAleatoria() {
    for (let i = 0; i < misHabilidades.length; i++) {
        if (Math.random() < 0.3) {
            alert(`¿Sabías que trabajo con ${misHabilidades[i]}?`);
            break; // Usando break para mostrar solo una habilidad
        }
    }
}

// Función que usa if...else para manejar logros
function manejarLogro(puntos) {
    puntosTotales += puntos;
    
    if (puntosTotales >= 100 && logrosDesbloqueados === 0) {
        alert("¡Logro desbloqueado: Explorador Curioso! 🏆");
        logrosDesbloqueados++;
    } else if (puntosTotales >= 50 && logrosDesbloqueados === 0) {
        alert("¡Sigue explorando! Vas muy bien 🌟");
    }
    
    document.getElementById('puntuacion').innerHTML = 
        `Puntos: ${puntosTotales} | Logros: ${logrosDesbloqueados}`;
}

// Función para agregar interactividad a las habilidades
function agregarInteractividadHabilidades() {
    const habilidades = document.querySelectorAll('.skill-category');
    
    habilidades.forEach(habilidad => {
        habilidad.addEventListener('click', () => {
            habilidad.style.transform = 'scale(1.1)';
            manejarLogro(10);
            mostrarHabilidadAleatoria();
            
            setTimeout(() => {
                habilidad.style.transform = 'scale(1)';
            }, 300);
        });
    });
}

// Función para animar secciones al hacer scroll
function animarAlScroll() {
    const secciones = document.querySelectorAll('section');
    
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                manejarLogro(5);
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

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    inicializarPagina();
    animarAlScroll();
    
    // Animar el título principal
    const titulo = document.querySelector('h1');
    titulo.addEventListener('mouseover', () => animarTexto(titulo));
});