import React, { useState, useContext } from 'react'
import {CREATE_TODO} from '../actions'
import AppContext from '../contexts/AppContext'

const TodoForm = ({listId}) => {
  const {dispatch} = useContext(AppContext);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [openForm, setOpenForm] = useState(false);
  const addTodo = e => {
    e.preventDefault()
    dispatch({
     type: CREATE_TODO,
     listId,
     title,
     body
    })
    setTitle('')
    setBody('')
    setOpenForm(false)
  }
  const unCreatable = title === ''

  return (
    <>
    <h5 className="add-card" onClick={()=>setOpenForm(!openForm)}>＋カードを追加</h5>
    {openForm?(    
      <form className="todo-form">
        <div className="card">
        <div className="card-body">
          <h5 className="card-title"><input className="form-control" id="formEventTitle" placeholder="タイトル"  value={title} onChange={e => setTitle(e.target.value)}/></h5>
          <p className="card-text"><textarea className="form-control" id="formEventBody" placeholder="詳細"  value={body} onChange={e => setBody(e.target.value)}/></p>
          <button className="btn btn-primary" onClick={addTodo} disabled={unCreatable}>作成する</button>
        </div>
        </div>
      </form>
    ):(
      <></>
    )}

    </>
  )
}

export default TodoForm