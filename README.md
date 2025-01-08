**AluraGeek - Gestión de Productos**

Este proyecto es una aplicación web desarrollada con HTML, CSS, y JavaScript para gestionar productos en un inventario. Permite a los usuarios agregar nuevos productos a través de un formulario y ver la lista de productos existentes.

**Descripción**

La aplicación permite a los usuarios realizar las siguientes acciones:

Ver los productos disponibles: Los productos se cargan desde un archivo JSON simulado a través de una API.
Agregar productos: Los usuarios pueden agregar productos con un nombre, precio y una imagen proporcionada por URL.
Conexión con el servidor: La aplicación simula el uso de una API RESTful para interactuar con los productos, guardándolos en un archivo db.json.
Tecnologías utilizadas
HTML5: Para la estructura de la página.
CSS3: Para el estilo visual y el diseño.
JavaScript (ES6): Para la interacción dinámica con la página, incluida la adición de productos y la carga desde la API.
JSON: Para almacenar los productos en el archivo db.json.
API REST: Para simular la interacción con el servidor.

**Estructura del Proyecto**

├── challengeAluraGeek.html # Archivo principal HTML con la estructura de la aplicación

├── css/ │

├── reset.css # Reset de estilos por defecto │ 

├── flexbox.css # Estilos para el diseño con Flexbox │ 

└── estilos.css # Estilos personalizados para el proyecto 
├── js/ │

├── conexionAPI.js # Funciones para interactuar con la API (listar y enviar productos) │ 

├── producto.js # Lógica para manejar el formulario de creación de productos │ 

├── mostrarProducto.js # Funciones para mostrar los productos en la interfaz 
├── db.json # Archivo JSON que simula una base de datos con los productos

└── README.md # Este archivo

**Uso** 

Al ingresar a la página, podrás ver una lista de productos. Puedes agregar nuevos productos al inventario llenando el formulario en el lado derecho de la página con el nombre, precio y URL de la imagen del producto. Una vez que presiones "Enviar", el producto se agregará a la lista y se simulará su almacenamiento a través de la API.

**Autor** 

Desarrollado por Tatiana Rojas para Alura Latam - 2025.
