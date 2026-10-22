const inicio = document.getElementById('inicio');
const fondo = inicio.querySelector('.inicio__fondo');

const mostrar = () => inicio.classList.add('is-ready');
if (fondo.complete) mostrar();
else fondo.addEventListener('load', mostrar);

// En Figma el frame es un enlace: al hacer clic se avanza a la siguiente pantalla.
inicio.addEventListener('click', () => {
  window.location.href = 'bienvenido.html';
});
