import React from 'react';
import { TodoCounter } from './todocounter.js';
import { TodoSearch } from './todoSearch.js';
import { TodoList } from './todoList.js';
import { TodoItem } from './todoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';



const defaultTodos =[
    { text:"Estudiar Ingles" , completed:true},
    { text:"Trabajar" , completed:false},
    { text:"Hacer tareas U" , completed:false},
    { text:"Peluqueria" , completed:false},

]


function App() {

  const [todos,setTodos] =
  React.useState(defaultTodos);

  const [searchValue, setserchValue] = 
  React.useState('');


  const completedTodo= todos.filter(todos => todos.completed).length;
  const totalTodo = todos.length;
  const searchedtodos = todos.filter(
    (todo) => {
      const todosLower = todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());

      return todosLower
    }
  )

  return (
    
    <>
    

    <TodoCounter completed={completedTodo} total={totalTodo}/>
      <TodoSearch
        searchValue={searchValue}
        setserchValue={setserchValue}
      />

    <TodoList>
      {searchedtodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}             
          />
      ))}
    </TodoList>

      <CreateTodoButton/> 
    </>

  );
}





export default App;
