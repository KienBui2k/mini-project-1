import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Header.css'
export default function Header({ handleAddTask, handleUpdateTask, edetingTask }) {
 
  const [taskName, setTaskName] = useState('')
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)

    );
  } 
  useEffect(() => { 
    if (edetingTask){
      setTaskName(edetingTask.taskName);
      
    }else{
      setTaskName("")
      
    }
  },[edetingTask])
  return (
    <div className='header__container'>
          <Form className='control__form'>
              <Form.Group className="mb-3 input__form" controlId="exampleForm.ControlInput1">
                  <Form.Label className='form__item__1'>Mini Project</Form.Label>
                  <Form.Control
                   value={taskName} onChange={(e) => {
                    setTaskName(e.target.value)
                  }}
                   className='form__item__2' type="text" placeholder="New Task" />
          {!edetingTask ? (<i onClick={(e) => {
            e.preventDefault();
            handleAddTask({
              type: 'addTask', newTask: {
                taskId: uuidv4(),
                taskName,
                complete: false,
              }
            })
          }} type="submit" class="bi bi-plus-circle form__item__3"></i>) : (<button onClick={() => handleUpdateTask({ type: 'updateTask', taskUpdate : {
            taskId: edetingTask.taskId,
            taskName,
            complete: edetingTask.complete
          }})}>Save</button>)}
                  
              </Form.Group>
          </Form>
    </div>
  )
}
