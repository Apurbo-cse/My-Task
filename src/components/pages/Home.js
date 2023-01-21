import React, { useState } from "react";
import CreateTask from "../common/CreateTask";
import TaskList from "../common/TaskList";

const Home = () => {
  const [isCreateMode, setIsCreateMode] = useState(false);
  return (
    <>
      {isCreateMode && (
        <CreateTask
          onClick={() => setIsCreateMode(isCreateMode ? false : true)}
        />
      )}
      {/* {isCreateMode ? null : null} */}

      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <div className="float-left">
          <h4>My Task List</h4>
        </div>
        <div className="float-right">
          {isCreateMode ? null : null}

          <button
            className={` btn ${isCreateMode ? "btn-danger" : "btn-warning"}`}
            onClick={() => setIsCreateMode(isCreateMode ? false : true)}
          >
            <i className={`fa ${isCreateMode ? "fa-close" : "fa-edit"}`}></i>{" "}
            {isCreateMode ? "Close" : " Create"}Task
          </button>
        </div>
      </div>

      <TaskList />
    </>
  );
};

export default Home;
