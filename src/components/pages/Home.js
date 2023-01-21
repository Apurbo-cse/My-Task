import React, { useEffect, useState } from "react";
import CreateTask from "../common/CreateTask";
import TaskList from "../common/TaskList";

const Home = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  // const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "First Title",
        description: "lorem ipsum",
        priority: "High",
      },
      {
        id: 2,
        title: "Second Title",
        description: "lorem ipsum",
        priority: "Medium",
      },
      {
        id: 3,
        title: "Third Title",
        description: "lorem ipsum",
        priority: "Low",
      },
    ];
    setTask(data);
  }, []);
  // isAdded
  const Create = (e) => {
    e.preventDefault();
    const taskItem = {
      title,
      description,
      priority,
    };
    const taskData = task;
    // taskData.push(taskItem);
    taskData.unshift(taskItem);
    setTask(taskData);
    setTitle("");
    setDescription("");
    setPriority("");
    // setIsAdded(true);
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
            title={title}
            setTitle={(val) => setTitle(val)}
            description={description}
            setDescription={(val) => setDescription(val)}
            priority={priority}
            setPriority={(val) => setPriority(val)}
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

export default Home;
