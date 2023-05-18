
const url = 'http://10.12.100.220:8000/api/login'

console.log(url)
export const validarUsuario = async (usuario, contraseña) => {
    try {
        console.log(JSON.stringify(usuario,contraseña))
        const response =  await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(usuario, contraseña), 
            // data puede ser string o un objeto
            
            headers:{
              'Content-Type': 'application/json' 
              // Y le decimos que los datos se enviaran como JSON
            }
        });
        // Verificar el estado de la respuesta
        if (response.ok) {
            // La solicitud fue exitosa (código de estado 200-299)
            const data = await response.json();
            // Realizar alguna acción con los datos de respuesta
            console.log(data.token);
            localStorage.setItem('token', data.token)
        } else {
            // La solicitud no fue exitosa
            console.log('Error en la solicitud:', response.status);
        }
    } catch (error) { 
        console.log(error);
    }
}

export const dataUser = () => {

}


