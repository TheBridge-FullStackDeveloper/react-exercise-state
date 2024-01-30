
# To do List 📄

En este proyecto, desarrollaremos una lista de tareas utilizando React y Vite. A través de este ejercicio, aprenderás a manejar el estado, eventos y la renderización de listas en React, con la rapidez y eficiencia que ofrece Vite.

![Lista de tareas GIF](https://user-images.githubusercontent.com/33903092/131694503-8ca93b45-ff80-4291-9bc6-b590c3c764c1.gif)

## Configuración Inicial

### Primera Iteración: Creación y Configuración del Proyecto

1. **Creación del Proyecto con Vite**

   Comienza creando un nuevo proyecto React utilizando Vite:

   ```sh
   npm create vite@latest mi-todo-list -- --template react
   ```

   Esto generará una nueva carpeta `mi-todo-list` con una estructura de proyecto inicial para React configurada por Vite.

2. **Instalación de Dependencias**

   Accede a tu nuevo directorio de proyecto y ejecuta la instalación de dependencias:

   ```sh
   cd mi-todo-list
   npm install
   ```

3. **Arranque del Servidor**

   Inicia el servidor de desarrollo de Vite:

   ```sh
   npm run dev
   ```

   Tu proyecto estará disponible en `http://localhost:3000`.

## Desarrollo de la Lista de Tareas

### Segunda Iteración: Creación de Input para Tareas

- **Input para Nuevas Tareas**

  Crea un campo de texto (`input`) para añadir nuevas tareas a la lista.

  💡 **Pista:** Utiliza el evento `onKeyDown` para manejar la entrada del usuario.

### Tercera Iteración: Actualizar el Estado con Nuevas Tareas

- **Manejo del Estado**

  Implementa una función para actualizar el estado cuando el usuario presione `Enter` u otra tecla de tu elección.

  💡 **Pista:** El estado podría ser un array que contenga las tareas.

### Cuarta Iteración: Renderizar Lista de Tareas

- **Visualización de Tareas**

  Dibuja en el DOM la lista de tareas basándote en el estado actual.

## Bonus: Funcionalidades Adicionales

- **Tachar o Eliminar Tareas**

  Añade funcionalidades para marcar las tareas como completadas o eliminarlas.

  💡 **Pista:** El estado podría ser un array de objetos, algo así:

  ```js
  {
    description: 'Tarea',
    isDone: false,
    _id: 1,
  }
  ```

- **Botón para Añadir Tareas**

  Considera reemplazar `onKeyDown` por un botón para añadir tareas a la lista.

- **División en Componentes**

  Para una mejor organización y reutilización del código, divide tu aplicación en componentes más pequeños y manejables.

Este proyecto te permitirá adentrarte en el desarrollo con React y Vite, aprovechando las ventajas de ambos para una experiencia de desarrollo ágil y eficiente.
