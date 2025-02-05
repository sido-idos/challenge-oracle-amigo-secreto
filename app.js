let amigos = [];

//La función toma el valor ingresado en el input con id "amigo", limpia espacios innecesarios y verifica si el nombre ya está en la lista.
//Si es un nombre válido (no repetido y no vacío), lo agrega en el arreglo "amigos" y actualiza la lista en pantalla.
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo'); //Obtener valor del elemento con id "amigo" en el HTML asignandolo a una variable
    const nombre = inputNombre.value.trim(); //eliminar espacios innecesarios en inputNombre

    //Verificacion de input vacío para alertar al usuario
    if (!nombre) {
        alert("Por favor ingrese un nombre.");
        return; //Uso de return para terminar ejecucion de la funcion si se cumple el if (se usa esta forma y if-else para tener ejemplos)
    }

    //Verificacion de nombres ya existente para evitar repetidos
    if (amigos.includes(nombre)) {
        alert("El nombre ya ha sido ingresado.");
        return;
    }

    amigos.push(nombre); //Se agrega "nombre" a la lista "amigos"
    actualizarLista(); //Uso de funcion actualizarLista
    inputNombre.value = ''; //Limpieza de inputNombre en el HTML
}

//La funcion se encarga de mostrar los nombres de la lista en la pagina.
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); //Busqueda del elemento id = "listaAmigos" en el HTML
    listaAmigos.innerHTML = ''; //Limpieza de la lista mostrada en la pagina antes de actualizar

    //Se agregan los nombres a la lista en orden descendente con reverse()
    amigos.slice().reverse().forEach(nombre => { //Se crea una copia del arreglo amigos para no modificar el arreglo amigos directamente
                                                 //ForEach recorre el arreglo y por cada nombre en el arreglo ejecuta el código en la función flecha   
        const li = document.createElement('li'); //Se crea un elemento HTML <li> para representar un item lista
        li.textContent = nombre; //Se asigna el valor de nombre al contenido de texto del elemento <li>
        listaAmigos.appendChild(li); //Se añade el nuevo <li> como un sub-elemento de listaAmigos (el <ul> en el HTML)
    });
}

//La funcion se encarga de realizar el sorteo random del un nombre en la lista y las verificaciones de minimo de nombres y nombres repetidos
function sortearAmigo() {
    //Verificacion de la cantidad minima de elementos en el arreglo (3) para un sorteo levantando la alerta al usuario
    if (amigos.length < 3) {
        alert("Debe ingresar al menos tres nombres para realizar el sorteo.");
    } else {
        //Si hay mas de 2 nombres se realiza el sorteo
        const indiceSorteo = Math.floor(Math.random() * amigos.length); //Se genera un número aleatorio entre 0 y amigos.length - 1 asignandolo a indiceSorteo
        const amigoSorteado = amigos[indiceSorteo]; //Se utiliza indiceSorteo para obtener un nombre del arreglo amigos y lo guarda en la variable amigoSorteado

        // Mostrar el resultado en la pagina HTML
        const resultado = document.getElementById('resultado'); //Obtiener el elemento HTML con id "resultado"
        resultado.innerHTML = ''; //Limpieza de resultados anteriores
        const liResultado = document.createElement('li'); //Se crea un nuevo elemento <li> para mostrar el nombre del amigo sorteado en la lista
        liResultado.textContent = `¡El amigo secreto sorteado es: ${amigoSorteado}!`; //Asigna el texto que mostrará el <li> incluendo amigoSorteado
        resultado.appendChild(liResultado); //Se añade el nuevo <li> con liResultado para mostrar el resultado en la pagina HTML
    }
}
