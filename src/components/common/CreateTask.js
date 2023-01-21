import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";

const CreateTask = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  // const [isAdded, setIsAdded] = useState(false);

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
  }, []);
  // isAdded
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
    // setIsAdded(true);
  };

  return (
    <>
      {isCreateMode && (
        <>
          <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
            <div className="float-left">
              <h4>Create new task </h4>
            </div>
          </div>
          <form onSubmit={(e) => Create(e)} className="mb-4">
            <div className="form-group mb-1">
              <label className="mb-1">Title</label>
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
            <div className="form-group mb-1">
              <label className="mb-1">Description</label>
              <textarea
                className="form-control"
                type="text"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group mb-1  ">
              <label className="mb-1">Example select</label>
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

            <button type="submit" className="mt-3 btn btn-primary">
              Submit
            </button>

            <button
              type="submit"
              className="mt-3 mx-3 btn btn-danger"
              onClick={() => setIsCreateMode(isCreateMode ? false : true)}
            >
              Submit
            </button>
          </form>
        </>
      )}

      <TaskList
        task={task}
        isCreateMode={isCreateMode}
        onClickHandler={() => setIsCreateMode(isCreateMode ? false : true)}
      />
    </>
  );
};

export default CreateTask;
