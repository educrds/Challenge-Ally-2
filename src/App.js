import Home from "./pages/Home";
import Sign from "./pages/Sign";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/home" />
      <Route element={<Sign />} path="/*" />
    </Routes>
  );
};

export default App;
