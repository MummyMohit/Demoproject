import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addValue } from '../reduxstoolkit/TableSlice';

const Table = () => {
  const [inputdata, setInputdata] = useState({
    task: '',
    description: '',
    deadline: '',
    image: null, // Add field for image
  });
  const count = useSelector((state) => state.table); // Get `table` array from Redux state
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (
      !inputdata.task.trim() ||
      !inputdata.description.trim() ||
      !inputdata.deadline.trim() ||
      !inputdata.image // Ensure all fields are filled, including image
    )
      return;

    dispatch(addValue(inputdata)); // Dispatch the object
    setInputdata({ task: '', description: '', deadline: '', image: null }); // Clear the input fields
    document.getElementById('imageInput').value = ''; // Clear file input
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value }); // Update the corresponding field
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInputdata({ ...inputdata, image: file }); // Update image field
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
          <div className="form-group col-md-6 col-lg-6 col-sm-6 mt-4">
            <label htmlFor="imageInput">Upload Image</label>
            <input
              type="file"
              className="form-control-file"
              id="imageInput"
              onChange={handleImageChange}
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
        <div className='row'>
        <ul className="list-group">
          {count.table.map((item, index) => (
            <li className="list-group-item" key={index}>
              <strong>Task:</strong> {item.task} <br />
              <strong>Description:</strong> {item.description} <br />
              <strong>Deadline:</strong> {item.deadline} <br />
              {item.image && (
                <div>
                  <strong>Image:</strong> <br />
                  <img
                    src={URL.createObjectURL(item.image)}
                    alt="Task"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
