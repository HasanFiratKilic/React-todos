import React from 'react'
import Filter from './Filter'
import { useState } from 'react'
import Footer from './Footer';

function From() {

  const [arrayTodo,setArrayTodo] = useState([]);
  const [isAllTodoTicket,setisAllTodoTicket] = useState(false);

  return (
    <div className='todoapp'>
      <Filter arrayTodo={arrayTodo} setArrayTodo={setArrayTodo} isAllTodoTicket={isAllTodoTicket} setisAllTodoTicket={setisAllTodoTicket}/>
      {arrayTodo.length>0 ?<Footer arrayTodo={arrayTodo} setArrayTodo={setArrayTodo} />:""}
    </div>
  )
}

export default From
