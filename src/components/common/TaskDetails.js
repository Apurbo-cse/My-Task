import React from "react";

const TaskDetails = (props) => {
  const { item, index } = props;
  return (
    <>
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
    </>
  );
};

export default TaskDetails;
