import React, { useReducer, useState } from 'react'
import Header from './component/Header'
import NewContent from './component/NewContent'


export default function Layout() {
  const [edetingTask, setEdetingTask]= useState(null)
  const initState = JSON.parse(localStorage.getItem('listTask')) || [] ;
  const handleEditTask  = (id) =>{
    const taskEdit = initState.find((task) => task.taskId === id);
    console.log(taskEdit)
    setEdetingTask(taskEdit);
  }
    function reducerCount(state, action){
    switch(action.type) {
      case 'addTask':
      localStorage.setItem('listTask', JSON.stringify([...state, action.newTask]));
      return [...state, action.newTask];
      case 'deleteTask':
        const setDeleteTask = state.filter((task) => task.taskId !== action.taskId);
        localStorage.setItem('listTask', JSON.stringify(setDeleteTask));
        return setDeleteTask;
      case 'updateTask':
        const setUpdate = state.map(task => {
          if(task.taskId === action.taskUpdate.taskId ){
            return action.taskUpdate
        }
        return task;
      });
        localStorage.setItem('listTask', JSON.stringify(setUpdate));
        return setUpdate;

      case 'completeTask': 
        const completeTask = state.map((task) => {
          if( task.taskId === action.taskId){
            return {...task, complete: !task.complete}
          }
          else{
            return task;
          }
        })
        localStorage.setItem('listTask', JSON.stringify(completeTask))
        return completeTask;
        default :
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducerCount, initState)
  return (
    <div>
      <Header handleAddTask={dispatch} edetingTask={edetingTask} handleUpdateTask={dispatch}></Header>
      <NewContent handleDelete={dispatch} state={state} handleCompLete={dispatch} handleEditTask={handleEditTask}></NewContent>
    </div>
  )
}
