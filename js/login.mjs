import { validarUsuario } from "./API.mjs";
import { mostrarAlerta } from "./funciones.mjs"

document.addEventListener('DOMContentLoaded', () => {

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', formularioLogin)

 
async function formularioLogin (e) {

    e.preventDefault();

    const usuario = document.querySelector('#usuario').value
    const contraseña = document.querySelector('#contraseña').value

    console.log(usuario, contraseña)
    const validacion = {
        usuario,
        contraseña
    }

    if(validar(validacion)){
        mostrarAlerta('todos los campos son obligatorios')
    }

    const usuarioAuth =  await validarUsuario({usuario, contraseña})

    const token = localStorage.getItem('token')
    console.log(token)
    if(token) {
        window.location.href = './carga/AgregarNoticias.html';
    }else{
        mostrarAlerta('Usuario o contraseña incorrectos')
    }
    
   console.log(usuarioAuth)
   
 

}

function validar(validar) {
    return !Object.values(validar).every(element => element !== '') 
}



})



