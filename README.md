# Amigo Secreto - Sorteo Aleatorio

Este proyecto es una aplicación web interactiva para realizar un "Sorteo de Amigo Secreto". La aplicación permite a los usuarios ingresar nombres de amigos, y luego realizar un sorteo aleatorio para elegir un amigo secreto dentro de la lista de nombres ingresados. La funcionalidad incluye validaciones como evitar nombres duplicados, asegurar que haya al menos tres nombres en la lista antes de permitir el sorteo, y mostrar el resultado de manera atractiva.

## Funcionalidades

1. **Ingreso de nombres**:
   - Los usuarios pueden ingresar nombres en un campo de texto y añadirlos a una lista de amigos.
   - Cada nombre ingresado se muestra en orden descendente (último nombre ingresado aparece primero).

2. **Validación de nombres duplicados**:
   - No se permiten nombres repetidos en la lista. Si un usuario intenta ingresar un nombre que ya existe, este no será añadido.

3. **Sorteo aleatorio**:
   - Al presionar el botón "Sortear amigo", la aplicación selecciona un nombre aleatorio de la lista de amigos y muestra el resultado en la pantalla.
   - El sorteo solo puede ser realizado si hay al menos tres nombres ingresados en la lista.

4. **Validación mínima de nombres**:
   - Si el número de amigos en la lista es menor a tres, se muestra un mensaje de alerta indicando que es necesario ingresar más nombres para realizar el sorteo.

5. **Interfaz visual**:
   - Los nombres se visualizan en una lista de manera dinámica, en orden descendente.
   - El resultado del sorteo se muestra en la parte inferior, destacando el nombre del amigo secreto seleccionado.

6. **Diseño simple y funcional**:
   - El diseño de la página es simple, con un campo de entrada para los nombres, botones de acción y una lista para visualizar los nombres y el resultado.
