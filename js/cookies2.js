const botonAceptarCookies =  document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

botonAceptarCookies.addEventListener("click",() => {
    avisoCookies.classList.toggle("aviso-remove");
    fondoAvisoCookies.classList.toggle("fondo-remove");
})