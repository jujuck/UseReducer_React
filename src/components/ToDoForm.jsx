import React, { useState } from 'react';
import { MdAddTask } from 'react-icons/md';

const ToDoForm = ({ dispatch }) => {
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [difficulty, setDifficulty] = useState('');

  return (
    <div className='container mt-5'>
      <div className="border rounded shadow m-4 p-2">
        <div className="row gx-3 gy-2 align-items-center">
          <div className="col-auto">Add a task</div>
          <div className="col-auto">
            <label htmlFor="name">
              Name
              <input
                id="label"
                onChange={(event) => setLabel(event.target.value)}
                value={label}
                className='form-control'
              />
            </label>
          </div>
          <div className="col-auto">
            <label htmlFor="description">
              Description
              <input
                id="description"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                className='form-control'
              />
            </label>
          </div>
          <div className="col-auto">
            <label htmlFor="type">
              Type
              <select
                id="type"
                className='form-control'
                onChange={(event) => setType(event.target.value)}
                value={type}
              >
                <option value="car" selected>Car</option>
                <option value="hobbies">Hobbies</option>
                <option value="laundry">Laundry</option>
                <option value="gardening">Gardening</option>
                <option value="cooking">Cooking</option>
                <option value="other">other</option>
              </select>
            </label>
          </div>
          <div className="col-auto">
            <label htmlFor="difficulty">
              Difficulty
              <select
                id="difficulty"
                className='form-control'
                onChange={(event) => setDifficulty(event.target.value)}
                value={difficulty}
              >
                <option value="">--</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
          </div>
          <div className="col-auto">
            <button className='btn btn-light' onClick={() => dispatch({ type: "ADD_TODO", payload: { label, description, type, difficulty } })}>Go !!!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoForm