import React from "react";

const CreateTask = (props) => {
  const {
    Create,
    name,
    setName,
    body,
    setBody,
    email,
    setEmail,
    onClickHandler,
  } = props;

  return (
    <>
      <form onSubmit={(e) => Create(e)} className="mb-4">
        <div className="form-group mb-1">
          <label className="mb-1">Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group mb-1">
          <label className="mb-1">Description</label>
          <textarea
            className="form-control"
            type="text"
            rows={3}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="form-group mb-1  ">
          <label className="mb-1">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="mt-3 btn btn-primary">
          Submit
        </button>

        <button
          type="submit"
          className="mt-3 mx-3 btn btn-danger"
          onClick={() => onClickHandler()}
        >
          Close
        </button>
      </form>
    </>
  );
};

export default CreateTask;
