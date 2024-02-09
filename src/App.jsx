import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import "./App.css"





function App() {

  return (
    <div className="main">
      <Header />

      <TodoList />
      
    </div>
  );
}

export default App;
