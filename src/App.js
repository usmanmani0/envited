import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import CreateEvent from "./components/CreateEvent";
import ShowEvent from "./components/ShowEvent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<ShowEvent />} />
      </Routes>
    </div>
  );
}

export default App;
