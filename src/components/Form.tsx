import React from "react";

//css
import "../style/form.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Form: React.FunctionComponent<Props> = ({ todo, setTodo, handleAdd }) => {
    return(
        <form className="form" onSubmit={(e) => handleAdd(e)}>
            <input className="form_input" type="input" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Task" />
            <button className="form_btn" type="submit">add</button>
        </form>
    )
}

export default Form;