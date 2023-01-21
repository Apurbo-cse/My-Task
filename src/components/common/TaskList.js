import React from "react";
import { Table } from "react-bootstrap";

const TaskList = () => {
  return (
    <>
      <h4>My Task List</h4>
      <Table striped bordered hover>
        <thead>
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
              <i className="fa fa-pencil pointer text-info " title="Edit Task"></i>
              <i className="fa fa-trash pointer text-danger mx-2 " title="Delete Task"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TaskList;
