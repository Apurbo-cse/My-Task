import React, { useState, useEffect } from "react";

const CreateTask = () => {
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
      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <div className="float-left">
          <h4>Create new task </h4>
        </div>
      </div>
      <form onSubmit={(e) => Create(e)} className="mb-4">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Description</label>
          <textarea
            class="form-control"
            type="text"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select
            class="form-control"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Select priority</option>
            <option value={"High"}>High</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Low"}>Low</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateTask;
