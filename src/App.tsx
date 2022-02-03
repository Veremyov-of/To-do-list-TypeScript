import React, { FormEvent, useState } from 'react';

//css
import "./style/app.css";

//components
import Form from './components/Form';
import ListTodos from './components/ListTodos';


//interface
import { Todo } from './model';


const App: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo)
      setTodos([...todos, {id: Date.now(), isDone: false, todo}]);
    setTodo('');
  }

  return (
    <div className='container'>
      <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ListTodos setTodos={setTodos} todos={todos} />
    </div>
  )
}

export default App;
