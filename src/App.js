import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";

import TaskDetailsPage from "./views/TaskDetailsPage";
import TaskListPages from "./views/TaskListPages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TaskListPages />} />
          <Route path="/task-details" element={<TaskDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
