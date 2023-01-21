import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const TaskList = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    //cal api and get data
    const data = [
      {
        id: 1,
        title: "First Title",
        description: "lorem ipsum",
        priroty: "High",
      },
      {
        id: 2,
        title: "Second Title",
        description: "lorem ipsum",
        priroty: "Medium",
      },
      {
        id: 3,
        title: "Third Title",
        description: "lorem ipsum",
        priroty: "Low",
      },
    ];
    setTask(data);
  }, []);

  return (
    <>
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
          {task.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.priroty}</td>
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
