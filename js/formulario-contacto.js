/* =====================================================
   VALIDACIÓN: AL MENOS TELÉFONO O CORREO
   -----------------------------------------------------
   Ninguno de los dos campos es "required" por separado
   (el cliente puede preferir dejar solo uno), pero el
   formulario no debe enviarse si AMBOS quedan vacíos.
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;

  const telefono = document.getElementById('telefono');
  const email = document.getElementById('email');
  const errorContacto = document.getElementById('errorContacto');

  formulario.addEventListener('submit', (evento) => {
    const hayTelefono = telefono.value.trim() !== '';
    const hayEmail = email.value.trim() !== '';

    if (!hayTelefono && !hayEmail) {
      evento.preventDefault();
      errorContacto.textContent = 'Completá al menos un teléfono o un correo electrónico.';
      telefono.focus();
    } else {
      errorContacto.textContent = '';
    }
  });

  // Si el usuario completa uno de los dos después de ver el error, lo limpiamos
  [telefono, email].forEach((campo) => {
    campo.addEventListener('input', () => {
      if (telefono.value.trim() !== '' || email.value.trim() !== '') {
        errorContacto.textContent = '';
      }
    });
  });
});
