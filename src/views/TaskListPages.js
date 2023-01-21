import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateTask from "../components/common/CreateTask";
import TaskList from "../components/common/TaskList";

const TaskListPages = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [task, setTask] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // call api and get data
    initilializeData();
  }, []);

  const initilializeData = () => {
    //     const data = [
    //       {
    //         id: 1,
    //         name: "First name",
    //         body: "lorem ipsum",
    //         email: "High",
    //       },
    //     ];
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      const data = res.data;
      console.log("res", data);
      setTask(data);
    });
    //     setTask(data);
  };

  const Create = (e) => {
    e.preventDefault();
    const taskItem = {
      name,
      body,
      email,
    };
    const taskData = task;
    taskData.unshift(taskItem);
    setTask(taskData);
    setName("");
    setBody("");
    setEmail("");
  };
  return (
    <>
      {isCreateMode && (
        <>
          <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
            <div className="float-left">
              <h4>Create new task </h4>
            </div>
          </div>
          <CreateTask
            name={name}
            setName={(val) => setName(val)}
            body={body}
            setBody={(val) => setBody(val)}
            email={email}
            setEmail={(val) => setEmail(val)}
            Create={(e) => Create(e)}
            onClickHandler={() => setIsCreateMode(isCreateMode ? false : true)}
          />
        </>
      )}

      <TaskList
        task={task}
        isCreateMode={isCreateMode}
        onClickHandler={() => setIsCreateMode(isCreateMode ? false : true)}
      />
    </>
  );
};

export default TaskListPages;
