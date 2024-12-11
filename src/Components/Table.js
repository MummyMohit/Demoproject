import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addValue } from '../reduxstoolkit/TableSlice';

const Table = () => {
  const [inputdata, setInputdata] = useState({ task: '', description: '', deadline: '' }); // Handle multiple fields
  const count = useSelector((state) => state.table); // Get `table` array from Redux state
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!inputdata.task.trim() || !inputdata.description.trim() || !inputdata.deadline.trim()) return; // Prevent adding empty fields
    dispatch(addValue(inputdata)); // Dispatch the object
    setInputdata({ task: '', description: '', deadline: '' }); // Clear the input fields
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value }); // Update the corresponding field
  };

  return (
    <div className="container mt-5">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="form-group col-md-6 col-lg-6 col-sm-6">
            <label htmlFor="taskInput">Task</label>
            <input
              type="text"
              className="form-control"
              id="taskInput"
              placeholder="Enter your Task"
              name="task"
              value={inputdata.task}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 col-lg-6 col-sm-6">
            <label htmlFor="descriptionInput">Description</label>
            <input
              type="text"
              className="form-control"
              id="descriptionInput"
              placeholder="Enter a Description"
              name="description"
              value={inputdata.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 col-lg-6 col-sm-6">
            <label htmlFor="deadlineInput">Deadline</label>
            <input
              type="date"
              className="form-control"
              id="deadlineInput"
              name="deadline"
              value={inputdata.deadline}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 col-lg-4 col-sm-6 mt-4">
            <button type="button" onClick={handleAddTask} className="btn btn-dark">
              Add Task
            </button>
          </div>
        </div>
      </form>
      <div className="mt-4">
        <ul className="list-group">
          {count.table.map((item, index) => (
            <li className="list-group-item" key={index}>
              <strong>Task:</strong> {item.task} <br />
              <strong>Description:</strong> {item.description} <br />
              <strong>Deadline:</strong> {item.deadline}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Table;
