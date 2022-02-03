import React from "react";

//css
import "../style/listTodos.css";

//interface
import { Todo } from './../model';

//components
import ItemTodo from "./ItemTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListTodos: React.FunctionComponent<Props> = ({todos, setTodos}) => {
    return (
        <div className="listTodos">
            {todos.map(todo => (
                <ItemTodo setTodos={setTodos} key={todo.id} todo={todo} todos={todos} />
            ))}
        </div>
    )
}

export default ListTodos;