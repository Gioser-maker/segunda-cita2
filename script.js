const botonesConfirmar = document.querySelectorAll('.confirmar');
const confirmacion = document.getElementById('confirmacion');

botonesConfirmar.forEach((boton) => {
  boton.addEventListener('click', function () {
    confirmacion.style.display = 'block';

    botonesConfirmar.forEach((b) => {
      b.disabled = true;
    });

    this.innerHTML = '✔ Confirmado';
  });
});