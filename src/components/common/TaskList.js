import React from "react";
import { Table } from "react-bootstrap";

const TaskList = (props) => {
  const task = props.task;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <div className="float-left">
          <h4>My Task List</h4>
        </div>
        <div className="float-right">
          <button
            className={` btn ${
              props.isCreateMode ? "btn-danger" : "btn-warning"
            }`}
            onClick={() => props.setIsCreateMode()}
          >
            <i
              className={`fa ${props.isCreateMode ? "fa-close" : "fa-edit"}`}
            ></i>
            &nbsp;
            {props.isCreateMode ? "Close" : "Create"}&nbsp;Task
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
