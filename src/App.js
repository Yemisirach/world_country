import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
