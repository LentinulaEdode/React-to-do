--------------------------------------------------------------------------------------------------------------------------------------------------------
De la creación de TuWeather, llega: TuTo-do List!, una aplicación sencilla, sin pretensiones, para la administración de tareas. 
En ella, puedes agregar las tareas, marcarlas como completarlas y eliminarlas. 
----------------------------------------------------------------------------------------------------------------------------------------------------------

Características:

- Agregar Tareas: Escribe el nombre de la tarea en el campo de entrada y haz clic en "Añadir" para agregarla a la lista.

- Marcar como Completada: Haz clic en la tarea para marcarla como completada. Puedes desmarcarla si es necesario.

- Eliminar Tarea: Haz clic en la "X" al lado de la tarea para eliminarla de la lista.

- Estilo Personalizado: La aplicación cuenta con un pequeño corazón animado en el encabezado para darte ánimos (todos sabemos que a veces las tareas más sencillas se tornan difíciles de cumplir). Asimismo, los colores empleados pretenden evocar sentimientos positivos, dada la relación que existe con conceptos como la suavidad, la delicadeza, lo infantil, de los tonos rosados. 

--------------------------------------------------------------------------------------------------------------------------------------------------------

Explicación del código: 

Se han usado funcionalidades básicas en React, como useState, useEffect, y useRef.

- useState: Hook para manejar el estado de la lista de tareas.
- useEffect: Hook para realizar operaciones después de que la interfaz de usuario se actualice.
- useRef: Hook para acceder al valor mutable de la entrada de texto, en este caso.
- add: Función para agregar una tarea a la lista.
- localStorage: Almacena y recupera datos en el navegador.
- TodoItems: Componente que representa una tarea individual.
- toggle: Función para marcar o desmarcar una tarea como completada.
- Los iconos (tick, not_tick, cross) representan estados de las tareas.

- Se ha declarado la variable 'count' para asignar un número único a cada tarea, de modo que al inspeccionar lo guardado en el localStorage, se puede ver cuántas tareas se han registrado en total.