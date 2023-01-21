import React from "react";
import { Table } from "react-bootstrap";
import TaskDetails from "./TaskDetails";

const TaskList = (props) => {
  const { task, onClickHandler, isCreateMode } = props;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <div className="float-left">
          <h4>My Task List</h4>
        </div>
        <div className="float-right">
          <button
            className={` btn ${isCreateMode ? "btn-danger" : "btn-warning"}`}
            onClick={() => onClickHandler()}
          >
            <i className={`fa ${isCreateMode ? "fa-close" : "fa-edit"}`}></i>
            &nbsp;
            {isCreateMode ? "Close" : "Create"}&nbsp;Task
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
            <TaskDetails item={item} index={index} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TaskList;
