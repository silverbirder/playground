import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Tab from "./pages/tab";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tab" element={<Tab />} />
    </Routes>
  );
}

export default App;
