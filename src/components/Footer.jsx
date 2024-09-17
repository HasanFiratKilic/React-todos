import React from 'react'
import { useEffect,useState } from 'react';

function Footer({arrayTodo,setArrayTodo}) {
    const [tempTodo,setTempTodo]=useState([...arrayTodo]);

    

    const allTodo=()=>{
        setArrayTodo(tempTodo);   
    }

    const activeTodo=()=>{
        setTempTodo(arrayTodo);
        const activeTodos = arrayTodo.filter((item) => item.active);
        setArrayTodo(activeTodos);
    }

    const completedTodo=()=>{
        setTempTodo(arrayTodo);
        const activeTodos = arrayTodo.filter((item) => item.active);
        setArrayTodo(activeTodos);
    }

    const clearCompleted = ()=>{
        setArrayTodo(arrayTodo.filter((item)=>item.active))
    }

  return (
    <div >
      <footer className="footer">
		<span className="todo-count">
			<strong>{arrayTodo.length} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a onClick={allTodo} href="#/" className="selected">All</a>
			</li>
			<li>
				<a onClick={activeTodo} href="#/">Active</a>
			</li>
			<li>
				<a onClick={completedTodo} href="#/">Completed</a>
			</li>
            <li>
				<a onClick={clearCompleted} href="#/">Clear completed</a>
			</li>
		</ul>

		
	</footer>
    </div>
  )
}

export default Footer
