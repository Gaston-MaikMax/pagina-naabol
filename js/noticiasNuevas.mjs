


(function(){

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', validarNuevaNoticia)
 const url = 'http://localhost:4000/noticias';

//
 
    const nuevaNoticia = async(noticiaNueva) => {
    try {
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(noticiaNueva), // data puede ser string o un objeto
            headers:{
              'Content-Type': 'application/json' // Y le decimos que los datos se enviaran como JSON
            }
        });
    } catch (error) {
        console.log(error);
    }
}
    async function validarNuevaNoticia(e) {
        
        e.preventDefault();
        const titulo = document.querySelector('#titulo').value
        const descripcion = document.querySelector('#descripcion').value

        const nociaNueva ={
            titulo,
            descripcion,
        }

        /*Mandamos a llamar la funcion validar y le pasamos como argumento el objeto de noticias nuevas*/
        if(validar(nociaNueva)){

            /* mandamos a llamar a la funcion que muestra la alerta*/
            mostrarAlerta('todos los campos son obligatorios')
            return;
        }

        await nuevaNoticia(nociaNueva)
        
    }
    
   
    
    function validar(validar) {
        return !Object.values(validar).every(element => element !== '') 
    }

    
})()
