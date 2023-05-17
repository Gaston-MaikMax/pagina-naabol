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
    title: 'Seguro quieres Dar debaja?',
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
 
/*agregar*/
async function crearUrse() {
  const { value: formValues } = await Swal.fire({
    title: 'Subir noticia',
    input: 'text',
    input: 'file',
     inputAttributes: {
   'accept': 'image/*',
      'aria-label': 'Upload your profile picture'
    },
    html:
      
      '<input type:"file" id="swal-input1" class="swal2-input">' +
      '<input id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })

  const { value: text } = await Swal.fire({
  input: 'textarea',
  inputLabel: 'Message',
  inputPlaceholder: 'Type your message here...',
  inputAttributes: {
    'aria-label': 'Type your message here'
  },
  showCancelButton: true
})

  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }
}
/*
function crearUrse() {
const { value: formValues } = await Swal.fire({
  title: 'Multiple inputs',
  html:
    '<input id="swal-input1" class="swal2-input">' +
    '<input id="swal-input2" class="swal2-input">',
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById('swal-input1').value,
      document.getElementById('swal-input2').value
    ]
  }
})

if (formValues) {
  Swal.fire(JSON.stringify(formValues))
}
}
*/

