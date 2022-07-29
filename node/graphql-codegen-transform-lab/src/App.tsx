import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Parallel from "./pages/parallel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/p" element={<Parallel />} />
    </Routes>
  );
}

export default App;
