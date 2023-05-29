# Week 5 - Proyecto en equipo - Simpsons API

- Se han instalado las configuraciones iniciales y el sonar.

## Listado de componentes y responsabilidades:

- Header: Muestra en pantalla el título de la aplicación. Contiene el ‘Menú’
- Menu: Muestra un menú de navegación con 4 enlaces (’Crear personaje’, ‘Privada’, ‘Filtro’ e ‘Inicio’).
- Paging: Muestra una barra donde se verán los botones ‘Anterior’ y ‘Siguiente’. Según que botón se pulse se renderizará en la pantalla los siguientes 5 personajes o los 5 anteriores.
- List: Se encargará de renderizar en pantalla a los personajes con sus respectivos nombres, y esos datos se renderizarán mediante una llamada a un método getAll que vendrá recogido por props. Al hacer click en un personaje se renderizará en pantalla el componente ‘Card’.
- Card: Se encargará de renderizar en pantalla mediante una tarjeta los datos completos de cada personaje. Estos datos los recogemos por props desde el array de objetos traído con el método fetch de la API. La tarjeta renderizada tendrá un botón de cerrar para que se vuelva a renderizar el componente ‘List’.
- UserCard: Este componente es igual que el componente Card, pero se renderizan los botones de ‘Editar’ y ‘Borrar’. El botón ‘Editar’ llevará a que se renderice el componente ‘Form’. El botón ‘Borrar’ eliminará el personaje del listado con el evento onClick mediante la llamada a un método handleDelete y acto seguido se renderizará de nuevo el componente ‘List’.
- Form: Renderizará un formulario. En el formulario donde se puede crear un personaje nuevo, los campos a rellenar estarán vacíos, y dicho personaje se añadirá al listado de personajes existentes con un evento onClick que llamará al método addCharacter desde el hook de useContext. En el formulario donde se pueden modificar los datos de un personaje existente, los campos aparecerán rellenos con los datos recogidos por los parámetros del objeto de cada personaje, y al hacer click en ‘guardar’ con el evento onClick se llamará al método editCharacter desde el hook de useContext.
- Footer: Mostrará en la parte de abajo de la pantalla un título con el nombre del grupo del proyecto.
- Error: Muestra en pantalla una imagen donde se ve escrito: ‘Error 404: Not found’ en el caso en el que el fetch de la url no se ejecute correctamente.
