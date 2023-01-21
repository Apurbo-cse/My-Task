import React from "react";
import { Table } from "react-bootstrap";

const TaskList = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <div className="float-left">
          <h4>My Task List</h4>
        </div>
        <div className="float-right">
          <button className="btn btn-warning">
            <i className="fa fa-edit"></i> Create Task
          </button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead className="bg-info">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priroty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>title</td>
            <td>Desc</td>
            <td>Low</td>
            <td>
              <button className="btn btn-info ms-3">
                <i className="fa fa-pencil" title="Edit Task"></i>
              </button>
              <button className="btn btn-danger ms-3">
                <i className="fa fa-trash" title="Delete Task"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      
    </>
  );
};

export default TaskList;
