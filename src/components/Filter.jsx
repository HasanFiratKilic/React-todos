import React from 'react'
import { useState } from 'react';

function Filter({ arrayTodo, setArrayTodo ,isAllTodoTicket, setisAllTodoTicket }) {

  const [tolist, settolist] = useState({ title: "", active: true});
  const [isEditing, setIsEditing] = useState(null);
  

  const deleteTodo=(index)=>{
    console.log(index)
    const newTodosList = arrayTodo.filter(item=>arrayTodo.indexOf(item)!==index);
    setArrayTodo(newTodosList);
  }

  const TodoChange = (e, index) => {

    const newTodos = [...arrayTodo];
    newTodos[index].title = e.target.value; // Todo'nun başlığını güncelle
    setArrayTodo(newTodos);
  }

  const onAddInput = (e) => {
    settolist({ ...tolist, [e.target.name]: e.target.value });
    console.log(tolist);
    
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setArrayTodo([...arrayTodo, tolist]);
      settolist({ title: "", active: true });
      console.log(arrayTodo);

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini önler
  };

  const handleCheckboxChange = (index) => {
    const newTodos = [...arrayTodo];
    newTodos[index] = { ...newTodos[index], active: !newTodos[index].active };
    setArrayTodo(newTodos);
  };

  const handleBlur = () => {
    setIsEditing(null);
  }

  const handleLabelClick = (index) => {
    setIsEditing(index)
  }
  const todoAllCheck = ()=>{
    setisAllTodoTicket(!isAllTodoTicket);
    const newTodos = arrayTodo.map((todo)=>{return{...todo,active:isAllTodoTicket?true:false}
    })
    setArrayTodo(newTodos);
  }



  return (



    <div >
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit} >
          <input
            name="title"
            className="new-todo"
            value={tolist.title}
            onChange={onAddInput}
            type="text"
            onKeyDown={handleKeyDown}
            placeholder='What needs to be done?' />
        </form>
      </header>

      <section className="main">
        <input className="toggle-all" id="toggle-all" checked={isAllTodoTicket}  onChange={()=>todoAllCheck()} type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label></section>

      <ul className='todo-list'>
        {arrayTodo.map((Todo, index) => (
          <li key={index} className={`${!Todo.active ? "completed":""}`} >
            
            {isEditing === index ? (<input type='text' className="new-todo"  value={Todo.title} onChange={(e) => TodoChange(e,index)} onBlur={handleBlur} autoFocus/>) : (
               <div className="view">
               <input className="toggle" type="checkbox" checked={!Todo.active} onChange={() => { handleCheckboxChange(index) }} />
               <label onClick={()=>handleLabelClick(index)}>{Todo.title}</label>
               
               <button onClick={()=>{deleteTodo(index)}} className="destroy"></button>
               
             </div>
            )}
          </li>
          
        ))}
      </ul>

    </div>
  )
}

export default Filter;
