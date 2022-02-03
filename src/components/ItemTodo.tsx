import React, { useEffect, useRef } from 'react';

//icons
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineDone } from "react-icons/md";

//css
import "../style/itemTodo.css";

//components
import { useState } from 'react';

//interface
import { Todo } from './../model';


interface Props {
    todos: Todo[];
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const ItemTodo: React.FunctionComponent<Props> = ({todos, todo, setTodos}) => {
    const [edit, setEdit] = useState<string>(todo.todo);
    const [editDone, setEditDone] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id:number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }
    
    const handleDel = (id:number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id:number) => {
        e.preventDefault();
        if(edit) {
            setTodos(todos.map((todo) => todo.id === id ? {...todo, todo: edit} : todo));
            setEdit(edit);
            setEditDone(false);
        }
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [editDone])


    return (
        <form className='form_item' onSubmit={(e) => handleEdit(e, todo.id)}>
            <div className='form_value'>
                {editDone?
                    (<input ref={inputRef} className='form_value_input' value={edit} onChange={(e) => setEdit(e.target.value)} />)
                :
                    (todo.isDone ? (
                        <s className='form_text'>{todo.todo}</s>
                    ): (
                        <span className='form_text'>{todo.todo}</span>
                    ))
                }
            </div>
            <div className='form_btns'>
                <button className='form_item_btn' onClick={() => setEditDone(!editDone)} type="button"><AiOutlineEdit /></button>
                <button className='form_item_btn' onClick={() => handleDel(todo.id)} type="button"><AiOutlineDelete /></button>
                <button className='form_item_btn' onClick={() => handleDone(todo.id)} type="button"><MdOutlineDone /></button>
            </div>
        </form>
    )
}

export default ItemTodo;