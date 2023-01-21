import React, { useState, useEffect } from "react";

const CreateTask = (props) => {
  const {
    Create,
    title,
    setTitle,
    description,
    setDescription,
    priority,
    setPriority,
    onClickHandler,
  } = props;

  return (
    <>
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
          onClick={() => onClickHandler()}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateTask;
