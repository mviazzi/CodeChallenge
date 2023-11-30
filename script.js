function enviar() {
    let nombre=document.getElementById('nombre');
    let apellido=document.getElementById('apellido');
    let nac=document.getElementById('fechaNacimiento');

fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        nomb: nombre.value,
        apell: apellido.value,
        nacimient: nac.value })
})
.then(res => res.json())
.then(data => {
    console.log(data)
    respuestas(data)
}
    )
        .catch (error => 
            console.error('Ocurrio un error', error)) 
};

function respuestas(respuesta) {
    document.getElementById('divi').innerHTML=`<h3>Nombre: ${respuesta.nomb}</h3>
    <h3>Apellido: ${respuesta.apell}</h3>
    <h3>Fecha de nacimiento: ${respuesta.nacimient}</h3>`;
};