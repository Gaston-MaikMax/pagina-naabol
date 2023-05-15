const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');

btn.addEventListener('click', e => {
  menu.classList.toggle("menu-expanded")
  menu.classList.toggle("menu-collapsed")

  document.querySelector('body').classList.toggle('body-expanded');
});

/* eliminar*/


function confirmarEliminacion() {
  Swal.fire({
    title: 'Seguro quieres Dardebaja?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Dar Baja'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '',
        'eliminado',
        'success'
      )
    }
  })
}
 
/*editar*/

