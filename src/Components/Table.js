import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { AddTask } from '../Redux/Action';
const Table = () => {
  const [inputdata,setInputdata] = useState("");
  const count = useSelector((state) => state.table); // Get `table` array from Redux state
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(AddTask(inputdata)); // Use the action creator
    setInputdata(''); // Clear the input field
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleAddTask}>
          <div className="row">
            <div className="form-group col-md-6 col-lg-4 col-sm-6">
              <label htmlFor="exampleInputEmail1">Enter your Task </label>
              <input
                type="email"
                className="form-control custom-form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Task "
                value={inputdata}
                onChange={(e)=>{setInputdata(e.target.value)}}
              />
            </div>
            <div className="form-group col-md-6 col-lg-4 col-sm-6 mt-5">
              <button type="button" onClick={handleAddTask}>
                Add Task
              </button>
            </div>
          </div>
        </form>
        <div className="col-md-6 col-lg-4 col-sm-6 mt-4">
          <ul className="list-group">
            {count?.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Table;
