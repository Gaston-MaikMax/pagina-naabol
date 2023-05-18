


document.addEventListener('DOMContentLoaded', () => {
    

    const form = document.querySelector('.sec1__form');
    form.addEventListener('submit', validarUser )

    
  
    function validarUser ( e ) {

        e.preventDefault();
        const usuarioAuth = document.querySelector('#usuario').value
        const contraseñaAuth = document.querySelector('#contraseña').value

        const usersAuth = {
            usuarioAuth,
            contraseñaAuth,
        }

        if(validar(usersAuth)){
            console.log('todos los campos son obligatorios')
            
            return
        }
        
       

        window.location.href = './carga/cargaNoticias.html';
      
    }

    function validar(obj){
        return !Object.values(obj).every(elemet => elemet !== '')
    }

}) 