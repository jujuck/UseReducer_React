import React from 'react';
import { BiTrash, BiPause } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';

const ToDoCard = ({ task, dispatch }) => {
  const dynamicCls = `row m-4 border shadow rounded ${task.cls}`
  return (
    <div className={dynamicCls}>
      <div className='col-2'>{task.label}</div>
      <div className='col-4'>{task.description}</div>
      <div className='col-2'>{task.type}</div>
      <div className='col-2'>{task.difficulty}</div>
      <div className='col-2'>
        <MdDone onClick={() => dispatch({ type: "ADD_CLS", payload: task, cls: 'text-success' })} />
        <BiPause onClick={() => dispatch({ type: "ADD_CLS", payload: task, cls: 'text-warning' })} />
        <BiTrash onClick={() => dispatch({ type: "REMOVE_TODO", payload: task })} />
      </div>
    </div>
  )
}

export default ToDoCard