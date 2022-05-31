import React from 'react';
import { BiTrash, BiPause } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';

const ToDoCard = ({ task }) => {
  return (
    <div className='row m-4 border shadow rounded'>
      <div className='col-2'>{task.label}</div>
      <div className='col-4'>{task.description}</div>
      <div className='col-2'>{task.type}</div>
      <div className='col-2'>{task.difficulty}</div>
      <div className='col-2'>
        <MdDone onClick={() => console.log("Done")} />
        <BiPause onClick={() => console.log("Pause")} />
        <BiTrash onClick={() => console.log("Delete")} />
      </div>
    </div>
  )
}

export default ToDoCard