

/*funcion de que muestra la alerta */
export const mostrarAlerta = (mensaje) => {

    const existeAlerta = document.querySelector('.alertaError')

    if (!existeAlerta) {
        const alerta = document.createElement('P')
        alerta.classList.add('alertaError')
        alerta.innerHTML = `
        <strong class="aletaText">Error!</strong>
        <span class="alertaMensaje">${mensaje}</span>
        `
        formulario.appendChild(alerta)
    
        setTimeout(() => {
            alerta.remove()
        },3000)
        
    }


}
/*funcion de que muestra la alerta */