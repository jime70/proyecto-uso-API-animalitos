Este proyecto es una aplicación web que consume una API para mostrar información de animales en adopción. Utiliza tecnologías como React, Vite, Bootstrap y Tailwind CSS para la interfaz de usuario, y Axios para la comunicación con la API.

Estructura del Proyecto
Componentes
BasicGrid.jsx: Muestra un formulario básico con campos de entrada y área de texto utilizando Bootstrap y Tailwind para el estilo.

DetalleAdoptame.jsx: Muestra los detalles de un animal adoptable, incluyendo nombre, imagen, edad, y características.

ErrorBoundary.jsx: Componente para el manejo de errores que captura cualquier excepción en la renderización de los componentes hijos y muestra un mensaje amigable.

InputAnimal.jsx: Componente de entrada de texto para manejar la búsqueda o ingreso de información sobre animales.

ListadoAdoptame.jsx: Muestra una lista de animales disponibles para adopción utilizando un diseño en cuadrícula.

Navbar.jsx: Barra de navegación que incluye enlaces y un menú desplegable en pantallas móviles.

Footer.jsx: Pie de página con información del autor y derechos reservados.

Header.jsx: Encabezado que muestra el título y subtítulo de la página.

Home.jsx: Página principal que incluye la cabecera, la lista de animales disponibles y el manejo de errores.

Informacion.jsx: Muestra información detallada de un animal, incluyendo nombre, imagen, personalidad, edad, y un botón para adoptar.

Servicios
ApiAdopcion.jsx: Contiene funciones para consumir la API externa:
fetchApiAdopcion(): Obtiene todos los animales disponibles para adopción.
fetchUnoSolo(adoptame): Obtiene detalles de un solo animal según el identificador pasado como parámetro.
Otros archivos
App.jsx: Componente raíz que contiene la configuración de las rutas y renderiza los componentes principales como Navbar, Home, y Footer.

Main.jsx: Punto de entrada del proyecto donde se inicializa la aplicación.

Tecnologías Usadas
React: Biblioteca de JavaScript para la construcción de interfaces de usuario.
Vite: Herramienta de construcción rápida y ligera para proyectos de frontend.
Bootstrap: Framework CSS para la creación de interfaces responsivas.
Tailwind CSS: Framework CSS basado en utilidades para un diseño moderno y personalizable.
Axios: Cliente HTTP basado en promesas para hacer solicitudes a la API.
React Router: Biblioteca para la navegación entre páginas en una aplicación React.

Estructura de archivos:
src/
│
├── components/
│   ├── BasicGrid.jsx
│   ├── DetalleAdoptame.jsx
│   ├── ErrorBoundary.jsx
│   ├── InputAnimal.jsx
│   ├── ListadoAdoptame.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── services/
│   └── ApiAdopcion.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Informacion.jsx
│
├── App.jsx
├── Main.jsx
└── index.css

Se usó
React, Tailwind, Bootstrap, Axios, React-router-dom

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
