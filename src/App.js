import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
