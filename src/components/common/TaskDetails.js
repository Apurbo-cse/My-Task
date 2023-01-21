import React from "react";

const TaskDetails = (props) => {
  const { item, index } = props;
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>
          <span className="limit">{item.body}</span>
        </td>
        <td>{item.email}</td>
        <td>
          <button className="btn btn-info ms-3">
            <i className="fa fa-pencil" title="Edit Task"></i>
          </button>
          <button className="btn btn-danger ms-3">
            <i className="fa fa-trash" title="Delete Task"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default TaskDetails;
