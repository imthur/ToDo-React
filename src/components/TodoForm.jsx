import { useState } from 'react'

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviou form!");
  }
 
  return (
    <div className="todo-form">
        <h2>Criar tarefa</h2>
        <form action="">
            <input type="text" placeholder="Digite o título" />
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="">Trabalho</option>
                <option value="">Pessoal</option>
                <option value="">Estudos</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm
