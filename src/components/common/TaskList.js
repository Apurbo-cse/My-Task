import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const TaskList = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "First Title",
        description: "lorem ipsum",
        priority: "High",
      },
      {
        id: 2,
        title: "Second Title",
        description: "lorem ipsum",
        priority: "Medium",
      },
      {
        id: 3,
        title: "Third Title",
        description: "lorem ipsum",
        priority: "Low",
      },
    ];
    setTask(data);
  }, [isAdded]);

  const Create = (e) => {
    e.preventDefault();
    const taskItem = {
      title,
      description,
      priority,
    };
    const taskData = task;
    taskData.push(taskItem);
    setTask(taskData);
    setTitle("");
    setDescription("");
    setPriority("");
    setIsAdded(true);
  };
  return (
    <>
      {isCreateMode && (
        <>
          {" "}
          <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
            <div className="float-left">
              <h4>Create new task </h4>
            </div>
          </div>
          <form onSubmit={(e) => Create(e)} className="mb-4">
            <div className="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <textarea
                className="form-control"
                type="text"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select
                className="form-control"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>Select priority</option>
                <option value={"High"}>High</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Low"}>Low</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary my-3">
              Submit
            </button>
          </form>
        </>
      )}
      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <div className="float-left">
          <h4>My Task List</h4>
        </div>
        <div className="float-right">
          {isCreateMode ? null : null}

          <button
            className={` btn ${isCreateMode ? "btn-danger" : "btn-warning"}`}
            onClick={() => setIsCreateMode(isCreateMode ? false : true)}
          >
            <i className={`fa ${isCreateMode ? "fa-close" : "fa-edit"}`}></i>{" "}
            {isCreateMode ? "Close" : " Create"} Task
          </button>
        </div>
      </div>
      <Table striped bordered hover className="mb-5">
        <thead className="bg-info">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.priority}</td>
              <td>
                <button className="btn btn-info ms-3">
                  <i className="fa fa-pencil" title="Edit Task"></i>
                </button>
                <button className="btn btn-danger ms-3">
                  <i className="fa fa-trash" title="Delete Task"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TaskList;
