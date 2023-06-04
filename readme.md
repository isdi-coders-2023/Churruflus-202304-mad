# Week 5 - Proyecto en equipo - Simpsons API

- Página web que muestra a todos los personajes de los Simpsons con una serie de características que definen a cada uno de ellos. Se puede filtrar y obtener el listado de personajes 'Vivos' y personajes 'Fallecidos'.

## Listado de componentes y responsabilidades:

- App: Encargado de renderizar los componentes que constituyen el layout de la página web.
- Header: Muestra en pantalla el título de la aplicación. Contiene el componente ‘Menú’.
- Menu: Muestra un menú de navegación con 2 enlaces (’Personajes’ y ‘Privada’).
- Button: Muestra una barra donde se verán los botones ‘Anterior’ y ‘Siguiente’. Recibe del contexto un useState hook para actualizar el estado de la página al llamar al método onClick en cada uno de los botones.
- App.Routes: Define las rutas de la aplicación usando react router dom. Cada ruta especifica un componente a mostrar cuando la URL coincide con el ‘path’ correspondiente.
- List: Contiene al componente ‘Button’. Renderiza en pantalla 3 botones para filtrar los personajes. Para ello recibe del contexto el array de personajes, y un useState hook para actualizar el listado de personajes al llamar al método onClick en cada uno de los 3 botones. Luego renderiza un listado con 20 personajes que vienen definidos por el componente ‘Card’.
- Card: Recibe el tipo ‘Simpson’ por props para poder renderizar las propiedades Nombre e Imagen de cada personaje. El elemento <li> que contiene el valor de esas propiedades está envuelto en el elemento ‘Link’ del react router dom para estar conectado con el componente ‘List’.
- Detail: Recibe por props el hook useParams del módulo react router dom, y del contexto recibe el array de personajes ‘characters’. Se declara una variable ‘item’ para poder ejecutar el método de arrays ‘find’ y así poder recibir los datos que necesitemos del personaje que se elija en el componente ‘List’. Renderiza en pantalla todos los valores de las propiedades existentes en el tipo ‘Simpson’.
- Api.Private: Es igual que el componente ‘List’, pero este componente se obtiene del fetch de la url de nuestro servidor local. En el menú de navegación contiene 3 enlaces (’Personajes’, ‘Crear personaje’, y ‘Pública’).
- UserCard: Este componente es igual que el componente Card, pero se renderizan los botones de ‘Editar’ y ‘Borrar’. El botón ‘Editar’ llevará a que se renderice el componente ‘Form’. El botón ‘Borrar’ eliminará el personaje del listado con el evento onClick mediante la llamada a un método handleDelete y acto seguido se renderizará de nuevo el componente ‘List’.
- Form: Renderizará un formulario. En el formulario donde se puede crear un personaje nuevo, los campos a rellenar estarán vacíos, y dicho personaje se añadirá al listado de personajes existentes con un evento onClick que llamará al método addCharacter desde el hook de useContext. En el formulario donde se pueden modificar los datos de un personaje existente, los campos aparecerán rellenos con los datos recogidos por los parámetros del objeto de cada personaje, y al hacer click en ‘guardar’ con el evento onClick se llamará al método editCharacter desde el hook de useContext.
- Footer: Muestra en la parte baja de la pantalla un título con el nombre del grupo del proyecto.
- Error: Muestra en pantalla una imagen donde se ve escrito: ‘Error 404: Not found’ en el caso en el que el fetch de la url no se ejecute correctamente.
