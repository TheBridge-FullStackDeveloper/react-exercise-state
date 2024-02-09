import React, { useState } from "react";
import "./TodoList.css";
import RemoveSvg from "../../icons/remove";
import CheckSvg from "../../icons/CheckSvg";

function TodoList() {
  
   // ESTADO LOCAL: LISTA TAREAS
   const [todos, setTodos] = useState([
    { id: 1, text: "Primera Tarea", completed: false },
  ]);
  // ESTADO LOCAL: AÑADIR TAREAS
  const [newTodo, setNewTodo] = useState("");

  // FUNCION setNewTodo ACTUALIZAR newTodo
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  //  VERIFICACION DE newTodo
  //  INTRODUCCIÓN DE newTodo EN todos
  //  VACÍA newTodo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: newTodo, completed: false },
      ]);

      setNewTodo("");
    }
  };

  // FUNCION setTodos PARA MARCAR COMO COMPLETADOS
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // FUNCION PARA CREAR TAREA PRESIONANDO ENTER
  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === "Enter") {
      return addTodo();
    }
    return;
  };

  // ELIMINA TAREAS
  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  
  return (
    <section>
      
      <div className="input">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo} id="addTodo">
          Agregar Tarea
        </button>
      </div>

      <div className="list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={todo.completed ? "completed" : ""}
            id="tarea"
          >
            <div className="leftDiv">
              <button onClick={() => toggleTodo(todo.id)} className="buttonCheck">
                {todo.completed ? <CheckSvg /> : " "}
              </button>
              <span className="num">{todo.id}</span>
            </div>

            <span>{todo.text}</span>

            <button className="buttonDelete" onClick={() => removeTodo(todo.id)}>
              <RemoveSvg />
            </button>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default TodoList;
