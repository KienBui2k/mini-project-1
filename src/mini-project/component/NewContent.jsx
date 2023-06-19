import React from 'react'

import './Task.css'
export default function NewContent({ state, handleUpdateTask, handleDelete, handleCompLete, handleEditTask }) {
  
  return (
    <> 
      
    <div className='main'>
        <p>You have {state.length} tasks to complete</p>
      {state.map((task) => ( 
        <div className='task__container'>
         
          <input type="checkbox" 
          checked={task.complete}
            onChange={() => 
              handleCompLete  ({
                type: "completeTask",
                taskId: task.taskId
              })
          }
          />
          <p className={`${task.complete ? "complete" : ""}`}>{task.taskName}</p>
          <button
            className='Edie__btn'
            onClick={() => handleEditTask(task.taskId)}
          >
            Edit
          </button>
          <button
            className='Delete__btn'
            onClick={() => handleDelete({
              type:"deleteTask", taskId: task.taskId
            })
          }
          >
            Delete
          </button>

        </div>
      ))}
    </div>
    </>
  )
}
